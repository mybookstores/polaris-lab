import { defineField, defineType } from "sanity";

export const subdirectionType = defineType({
  name: "subdirection",
  title: "Subdirection",
  type: "object",
  fields: [
    defineField({
      name: "id",
      title: "ID",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "label",
      title: "Label",
      type: "localizedString",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "localizedText",
    }),
  ],
  preview: {
    select: {
      title: "label.zh",
      subtitle: "id",
      fallbackTitle: "label.en",
    },
    prepare({ title, subtitle, fallbackTitle }: { title?: string; subtitle?: string; fallbackTitle?: string }) {
      return {
        title: title || fallbackTitle || "Subdirection",
        subtitle,
      };
    },
  },
});
