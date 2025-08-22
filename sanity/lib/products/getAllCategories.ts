import { defineQuery } from "next-sanity";
import { sanityFetch } from "@/sanity/lib/live";

export const getAllCategories = async () => {
  const ALL_CATEGORIES_QUERY = defineQuery(`
  *[_type == "category"]
  | order(name asc)`);

  try {
    // Use sanityFetch to send the query
    const categories = await sanityFetch({
      query: ALL_CATEGORIES_QUERY,
    });

    // Return the list of products, or an empty array if none are found
    return categories.data || [];
  } catch (e) {
    console.error("Error fetching all categories:", e);
    return [];
  }
};
