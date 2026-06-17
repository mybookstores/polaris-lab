import { defineField, defineType } from "sanity";

const iconOptions = [
  { title: "Flask", value: "flask" },
  { title: "Users", value: "users" },
  { title: "Brain", value: "brain" },
  { title: "Bot", value: "bot" },
];

export const researchDirectionType = defineType({
  name: "researchDirection",
  title: "Research Direction",
  type: "document",
  fields: [
    defineField({
      name: "id",
      title: "ID",
      type: "string",
      description: "Stable route id, e.g. ai-for-science",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "localizedString",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "id",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "icon",
      title: "Icon",
      type: "string",
      options: {
        list: iconOptions,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "color",
      title: "Color",
      type: "string",
      validation: (Rule) => Rule.required(),
      initialValue: "#3B82F6",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "localizedText",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "subdirections",
      title: "Subdirections",
      type: "array",
      of: [{ type: "subdirection" }],
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      validation: (Rule) => Rule.required().integer().min(0),
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
  orderings: [
    {
      title: "Manual order",
      name: "manualOrder",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "title.zh",
      fallbackTitle: "title.en",
      subtitle: "id",
    },
    prepare({ title, fallbackTitle, subtitle }: { title?: string; fallbackTitle?: string; subtitle?: string }) {
      return {
        title: title || fallbackTitle || "Research Direction",
        subtitle,
      };
    },
  },
});
