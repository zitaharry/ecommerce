import { type SchemaTypeDefinition } from "sanity";
import { productType } from "@/sanity/schemaTypes/productType";
import { categoryType } from "@/sanity/schemaTypes/categoryType";
import { orderType } from "./orderType";
import { salesType } from "./salesType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productType, categoryType, orderType, salesType],
};
