import { getAllProducts } from "@/sanity/lib/products/getAllProducts";

export default async function Home() {
  const products = await getAllProducts();

  return <div>{/*  Render all the products  */}</div>;
}
