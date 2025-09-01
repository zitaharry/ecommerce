import { defineQuery } from "next-sanity";
import { sanityFetch } from "@/sanity/lib/live";

export const getProductsByCategory = async (categorySlug: string) => {
  const PRODUCTS_BY_CATEGORY_QUERY = defineQuery(`
        *[
            _type == "product"
            && references(*[_type == "category" && slug.current == $categorySlug]._id)
        ] | order(name asc) [0]
    `);

  try {
    // Use sanityFetch to send the query and the category slug
    const products = await sanityFetch({
      query: PRODUCTS_BY_CATEGORY_QUERY,
      params: {
        categorySlug,
      },
    });

    // Return the list of products, or an empty array if none are found
    return products.data || [];
  } catch (e) {
    console.error("Error fetching products by category: ", e);
    return [];
  }
};
