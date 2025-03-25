import type { CollectionConfig } from "payload";

export const Users: CollectionConfig = {
  slug: "users",
  admin: {
    useAsTitle: "email",
  },
  access: {
    read: () => false,
    update: () => false,
    delete: () => false,
    create: () => false,
  },
  hooks: {
    beforeChange: [
      (data) => ({
        ...data,
        isAdmin: false,
      }),
    ],
  },
  auth: true,
  fields: [
    {
      name: "isAdmin",
      type: "checkbox",
      defaultValue: false,
      hidden: true,
    },
  ],
};
