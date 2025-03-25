import { boolean } from "@payloadcms/db-postgres/drizzle/pg-core";
import type { CollectionConfig } from "payload";

export const Admin: CollectionConfig = {
  slug: "admin",
  admin: {
    useAsTitle: "email",
  },
  auth: true,
  access: {
    read: () => true,
    update: () => true,
    delete: () => true,
    create: () => true,
  },
  hooks: {
    beforeChange: [
      (data) => ({
        ...data,
        isAdmin: true,
      }),
    ],
  },
  fields: [
    {
      name: "isAdmin",
      type: "checkbox",
      defaultValue: true,
      hidden: true,
    },
  ],
};
