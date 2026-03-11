import { type SchemaTypeDefinition } from "sanity";
import { post } from "./schemas/post";
import { tag } from "./schemas/tag";
import author from "./schemas/author";
import category from "./schemas/category";
import { gallery } from "./schemas/gallery";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, tag, author, category, gallery],
};
