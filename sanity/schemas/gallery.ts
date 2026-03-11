import { Rule } from "sanity";

export const gallery = {
  name: "gallery",
  title: "Gallery",
  type: "document",
  fields: [
    {
      name: "galleryImage",
      title: "Gallery image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    },
    {
      name: "name",
      title: "Image title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
      },
    },
  ],
};
