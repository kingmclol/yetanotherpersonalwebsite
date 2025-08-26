import { supabaseBucketUrl } from "../services/supabase";

/**
 * Checks if the given item is a File.
 * @param {*} item The item to check.
 * @returns {boolean} True if the item is a File, false otherwise.
 */
export function isFile(item) {
  return item && item instanceof File;
}

/**
 * Returns the URL of the image.
 * @param {String} imagePath The path of the image
 * @returns {String} The URL of the image
 */
export function getImageUrl(imagePath) {
  return `${supabaseBucketUrl}/${imagePath}`;
}

/**
 * Extracts the relative path from the image URL.
 * @param {String} imageUrl The URL of an image
 * @returns {String} The relative path of the image from the supabase bucket
 */
export function getImagePath(imageUrl) {
  return imageUrl.replace(`${supabaseBucketUrl}/`, "");
}
