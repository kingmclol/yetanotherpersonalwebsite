import { supabase } from "./supabase";

export async function createPost(post) {
  const { data, error } = await supabase
    .from("posts")
    .insert([post])
    .select()
    .single();
  if (error) {
    console.error("Error creating post:", error);
    throw new Error("Failed to create post");
  }
  return data;
}

export async function getPosts() {
  const { data: posts, error } = await supabase
    .from("posts")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) {
    console.error("Error fetching posts:", error);
    return [];
  }

  return posts;
}

export async function getPostById(id) {
  const { data: post, error } = await supabase
    .from("posts")
    .select("*")
    .eq("id", id)
    .single();
  if (error) {
    console.error("Error fetching post, was it just deleted?", error);
    return null;
  }
  return post;
}

export async function updatePost(id, updatedPost) {
  const { data: post, error } = await supabase
    .from("posts")
    .update(updatedPost)
    .eq("id", id)
    .select()
    .single();
  if (error) {
    console.error("Error updating post:", error);
    throw new Error("Failed to update post");
  }
  return post;
}

export async function deletePost(id) {
  const { data: post, error } = await supabase
    .from("posts")
    .delete()
    .eq("id", id)
    .select()
    .single();
  if (error) {
    console.error("Error deleting post:", error);
    throw new Error("Failed to delete post");
  }
  return post;
}
