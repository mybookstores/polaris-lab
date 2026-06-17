import { defineField, defineType } from "sanity";

export const paperType = defineType({
  name: "paper",
  title: "Paper",
  type: "document",
  fields: [
    defineField({
      name: "legacyId",
      title: "Legacy ID",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "authors",
      title: "Authors",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "year",
      title: "Year",
      type: "number",
      validation: (Rule) => Rule.required().integer().min(2000).max(2100),
    }),
    defineField({
      name: "venue",
      title: "Venue",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "direction",
      title: "Direction",
      type: "reference",
      to: [{ type: "researchDirection" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "citations",
      title: "Citations",
      type: "number",
      validation: (Rule) => Rule.required().integer().min(0),
      initialValue: 0,
    }),
    defineField({
      name: "abstract",
      title: "Abstract",
      type: "text",
      rows: 5,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "link",
      title: "Paper Link",
      type: "url",
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Draft", value: "draft" },
          { title: "Published", value: "published" },
        ],
      },
      initialValue: "published",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "venue",
    },
  },
});
