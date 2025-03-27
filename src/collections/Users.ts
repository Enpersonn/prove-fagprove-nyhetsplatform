import { adminsAndUser } from "@/access/adminAndUser";
import type { CollectionConfig } from "payload";

export const Users: CollectionConfig = {
  slug: "users",
  admin: {
    useAsTitle: "email",
  },
  access: {
    create: () => true,
    read: adminsAndUser,
    update: adminsAndUser,
    delete: ({ req }) => !!req.user?.isAdmin,
    admin: ({ req }) => !!req.user?.isAdmin,
  },
  auth: {
    tokenExpiration: 3 * 24 * 60 * 60, // three days in seconds
  },
  fields: [
    {
      name: "isAdmin",
      type: "checkbox",
      defaultValue: false,
    },
    {
      name: "subscriptions",
      type: "relationship",
      relationTo: "subscription",
      hasMany: true,
    },
  ],
};
