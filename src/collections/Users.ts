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
    delete: adminsAndUser,
    admin: ({ req }) => !!req.user?.isAdmin,
  },
  auth: {
    tokenExpiration: 3 * 24 * 60 * 60, // three days in seconds
  },
  hooks: {
    beforeChange: [
      ({ data }) => {
        if (!data.displayName && data.firstName && data.lastName) {
          data.displayName = `${data.firstName} ${data.lastName}`;
        }
      },
    ],
  },
  fields: [
    {
      name: "firstName",
      label: "Fornavn",
      type: "text",
    },
    {
      name: "lastName",
      label: "Etternavn",
      type: "text",
    },
    {
      name: "displayName",
      label: "Visningsnavn",
      type: "text",
    },
    {
      name: "isAdmin",
      type: "checkbox",
      defaultValue: false,
    },
    {
      name: "subscription",
      type: "join",
      collection: "subscription",
      on: "email",
    },
  ],
};
