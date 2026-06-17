import { defineField, defineType } from "sanity";

const roleOptions = [
  { title: "Director", value: "Director" },
  { title: "Co-director", value: "Co-director" },
  { title: "Faculty", value: "Faculty" },
  { title: "Advisory", value: "Advisory" },
];

export const teamMemberType = defineType({
  name: "teamMember",
  title: "Team Member",
  type: "document",
  fields: [
    defineField({
      name: "legacyId",
      title: "Legacy ID",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "string",
      options: {
        list: roleOptions,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "research",
      title: "Research Tags",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "bio",
      title: "Bio",
      type: "localizedText",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: "avatar",
      title: "Avatar URL",
      type: "url",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "directions",
      title: "Research Directions",
      type: "array",
      of: [{
        type: "reference",
        to: [{ type: "researchDirection" }],
      }],
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
      title: "name",
      subtitle: "title",
      media: "avatar",
    },
  },
});
