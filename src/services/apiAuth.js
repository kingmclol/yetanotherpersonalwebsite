import { supabase } from "./supabase";

export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new Error("Login failed: " + error.message);
  }
  return data.user;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();

  if (error) {
    throw new Error("Logout failed: " + error.message);
  }
}

export async function getCurrentUser() {
  const { data } = await supabase.auth.getUser();

  if (data) {
    return data.user;
  } else {
    console.error("Failed to fetch user data, are they logged in?");
    return null;
  }
}
