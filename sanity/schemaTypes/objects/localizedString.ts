import { defineField, defineType } from "sanity";

export const localizedStringType = defineType({
  name: "localizedString",
  title: "Localized String",
  type: "object",
  fields: [
    defineField({
      name: "zh",
      title: "中文",
      type: "string",
    }),
    defineField({
      name: "en",
      title: "English",
      type: "string",
    }),
  ],
  preview: {
    select: {
      zh: "zh",
      en: "en",
    },
    prepare({ zh, en }: { zh?: string; en?: string }) {
      return {
        title: zh || en || "Untitled",
        subtitle: zh && en && zh !== en ? `EN: ${en}` : undefined,
      };
    },
  },
});
