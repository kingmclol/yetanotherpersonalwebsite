import { isFile } from "../utils/helpers";
import { supabase, supabaseBucketUrl } from "./supabase";

export async function getProjects() {
  const { data: projects, error } = await supabase.from("projects").select("*");
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

  const imageFilePath = isFile(image) ? await uploadImage(image) : image;

  if (!imageFilePath) {
    throw new Error("Project image upload failed");
  }

  const { data, error } = await supabase
    .from("projects")
    .insert([{ ...project, image: imageFilePath }])
    .single();
  if (error) {
    console.error("Error creating project:", error);
    return null;
  }
  return data;
}

async function uploadImage(imageFile) {
  if (!imageFile || !isFile(imageFile)) return null;

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
  return `${supabaseBucketUrl}/${data.fullPath}`;
}
