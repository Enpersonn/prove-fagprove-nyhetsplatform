import type { CollectionConfig } from "payload";

export const Subscription: CollectionConfig = {
  slug: "subscription",
  fields: [
    {
      name: "email",
      type: "relationship",
      relationTo: "users",
      hasMany: false,
    },
    {
      name: "isActive",
      type: "checkbox",
      defaultValue: true,
    },
    {
      name: "expiresAt",
      type: "date",
      defaultValue: new Date(),
    },
  ],
};
