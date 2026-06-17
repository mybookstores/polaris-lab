import { defineField, defineType } from "sanity";

export const localizedTextType = defineType({
  name: "localizedText",
  title: "Localized Text",
  type: "object",
  fields: [
    defineField({
      name: "zh",
      title: "中文",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "en",
      title: "English",
      type: "text",
      rows: 4,
    }),
  ],
  preview: {
    select: {
      zh: "zh",
      en: "en",
    },
    prepare({ zh, en }: { zh?: string; en?: string }) {
      const title = zh || en || "Untitled";
      const subtitle = zh && en && zh !== en ? en : undefined;

      return {
        title,
        subtitle,
      };
    },
  },
});
