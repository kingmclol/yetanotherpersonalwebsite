import { isFile } from "../utils/helpers";
import { supabase } from "./supabase";

// Images are basically like this
// https://smcmradcaegdmqovagxx.supabase.co/storage/v1/object/public/project-images/furina.jpg
// `${supabaseBucketUrl}/${imagePath}
// `${supabaseBucketUrl}/${bucket}/${imageName}

export async function getProjects() {
  const { data: projects, error } = await supabase
    .from("projects")
    .select("*")
    .order("end_date", { ascending: false });
  if (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
  return projects;
}

export async function getProjectById(id) {
  const { data: project, error } = await supabase
    .from("projects")
    .select("*")
    .eq("id", id)
    .single();
  if (error) {
    console.error("Error fetching project:", error);
    return null;
  }
  return project;
}

export async function createProject(project) {
  const image = project.image; // Either url or file

  // If the image is a file, upload it, otherwise keep it unchanged.
  const imagePath = isFile(image) ? await uploadImage(image) : image;

  if (!imagePath) {
    throw new Error("Project image upload failed");
  }

  const { data, error } = await supabase
    .from("projects")
    .insert([{ ...project, image: imagePath }])
    .single();
  if (error) {
    console.error("Error creating project:", error);
    throw new Error("Failed to create project");
  }
  return data;
}

/**
 * Uploads an image file to Supabase storage.
 * @param {File} imageFile - The image file to upload.
 * @returns {Promise<string|null>} - The relative path of uploaded image from the supabase bucket or null if the upload failed.
 */
async function uploadImage(imageFile) {
  if (!imageFile || !isFile(imageFile)) throw new Error("Invalid image file");

  const imageName = `${crypto.randomUUID()}-${imageFile.name}`.replaceAll(
    "/",
    "",
  );

  const { data, error } = await supabase.storage
    .from("project-images")
    .upload(imageName, imageFile);

  if (error) {
    console.error("Error uploading image:", error);
    return null;
  }
  return data.fullPath;
}

// Can prob move to helpers, and
// update to not delete if more than one project uses it
/**
 * Deletes an image from Supabase storage.
 * @param {String} imagePath The path of the image to delete.
 * @returns {Promise<Boolean>} Whether the deletion was successful
 */
async function deleteImage(imagePath) {
  if (!imagePath) return false;

  const [bucket, fileName] = imagePath.split("/");
  const { error } = await supabase.storage.from(bucket).remove([fileName]);

  if (error) {
    console.error("Error deleting image:", error);
    return false;
  }
  return true;
}

/**
 * Fetches the project relative image path.
 * @param {Number} id The id of the project
 * @returns {Promise<String|null>} The URL of the project image or null if not found
 */
export async function getProjectImage(id) {
  const { data: projectImage, error } = await supabase
    .from("projects")
    .select("image")
    .eq("id", id)
    .single();
  console.log(projectImage.image);
  if (error) {
    console.error("Error fetching project image:", error);
    return null;
  }
  return projectImage.image;
}

/**
 * Updates a project with new data.
 * @param {Number} id The id of the project to update
 * @param {*} updatedProject Updated project object WITHOOUT id
 * @returns The updated data
 */
export async function updateProject(id, updatedProject) {
  const image = updatedProject.image; // Either path or file. Upload if file. Do nothing if path

  let imagePath;
  // Case 1: File, so need to upload new + delete old
  if (isFile(image)) {
    const oldImagePath = await getProjectImage(id);
    imagePath = await uploadImage(image);
    if (!imagePath) {
      throw new Error("Failed to upload new image, aborting update");
    }

    await deleteImage(oldImagePath);
  }
  // Case 2: image path, so it's pointing to an existing image; didn't update image
  else {
    imagePath = image;
  }

  const { data, error } = await supabase
    .from("projects")
    .update({ ...updatedProject, image: imagePath })
    .eq("id", id)
    .single();

  if (error) {
    console.error("Error updating project:", error);
    throw new Error("Failed to update project");
  }
  return data;
}

export async function deleteProject(id) {
  const { data, error } = await supabase
    .from("projects")
    .delete()
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error("Error deleting project:", error);
    throw new Error("Failed to delete project");
  }
  await deleteImage(data.image);
}
