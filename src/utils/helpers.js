import { format, isAfter, isBefore, isSameMonth, parse } from "date-fns";
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
/**
 * Checks if the given date is in the same month or before the date to compare.
 * @param {Date} date The date to check.
 * @param {Date} dateToCompare The date to compare against.
 * @returns {boolean} True if the date is in the same month or before the date to compare, false otherwise.
 */
export function isSameMonthOrBefore(date, dateToCompare) {
  return isBefore(date, dateToCompare) || isSameMonth(date, dateToCompare);
}

/**
 * Checks if the given date is in the same month or after the date to compare.
 * @param {Date} date The date to check.
 * @param {Date} dateToCompare The date to compare against.
 * @returns {boolean} True if the date is in the same month or after the date to compare, false otherwise.
 */
export function isSameMonthOrAfter(date, dateToCompare) {
  return isAfter(date, dateToCompare) || isSameMonth(date, dateToCompare);
}
// FUCK TIMEZONES
// /**
//  * Formats a date string to "MMM yyyy".
//  * @param {String} dateStr a string in the format "yyyy-MM-dd"
//  * @returns {String} The formatted date string
//  */
// export function formatDateMonthYear(dateStr) {
//   const date = parse(dateStr, "yyyy-MM-dd", new Date());
//   return format(date, "MMM yyyy");
// }

// /**
//  * Extracts the month and year from a date string. Screw timezones.
//  * @param {String} dateStr a string in the format "yyyy-MM-dd"
//  * @returns {Object} An object containing the month and year
//  */
// export function parseDate(dateStr) {
//   const [year, month, day] = dateStr.split("-").map(Number);
//   return { month, year, day };
// }
