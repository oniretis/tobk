import { defineType } from "sanity";

export const tag = defineType({
  name: "tag",
  title: "Upcoming events",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Event Name",
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
    {
      name: "date",
      title: "Date",
      type: "datetime",
    },
    {
      name: "link",
      title: "Link",
      type: "url",
    },
  ],
});
