import type { CollectionConfig } from "payload";

export const Article: CollectionConfig = {
  slug: "article",
  fields: [
    {
      name: "title",
      label: "Tittel",
      type: "text",
    },
    {
      name: "isPremium",
      label: "Premium innhold",
      type: "checkbox",
    },
    {
      name: "entry",
      label: "Ingress",
      type: "richText",
    },
    {
      name: "slug",
      label: "Slug",
      type: "text",
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
