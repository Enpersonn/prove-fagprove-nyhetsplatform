import type { CollectionConfig } from "payload";

export const Article: CollectionConfig = {
  slug: "article",
  fields: [
    {
      name: "title",
      label: "Tittel",
      type: "text",
      required: true,
    },
    {
      name: "isPremium",
      label: "Premium innhold",
      type: "checkbox",
      defaultValue: false,
    },
    {
      name: "entry",
      label: "Ingress",
      type: "richText",
      required: true,
    },
    {
      name: "slug",
      label: "Slug",
      type: "text",
      required: true,
    },
    {
      name: "mainImage",
      label: "Hovedbilde",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "content",
      label: "Full tekst",
      type: "richText",
    },
  ],
};
