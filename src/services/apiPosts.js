import { supabase } from "./supabase";

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
    console.error("Error fetching post:", error);
    return null;
  }
  return post;
}
