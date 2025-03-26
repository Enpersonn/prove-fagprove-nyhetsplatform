import type { CollectionConfig } from "payload";

export const Users: CollectionConfig = {
  slug: "users",
  admin: {
    useAsTitle: "email",
  },
  access: {
    read: ({ req }) => req.user?.isAdmin || false,
    update: ({ req }) => req.user?.isAdmin || false,
    delete: ({ req }) => req.user?.isAdmin || false,
    create: ({ req }) => req.user?.isAdmin || false,
  },
  hooks: {
    beforeValidate: [
      async ({ data, req }) => {
        if (!data?.email) return data;

        const adminMatch = await req.payload.find({
          collection: "admin",
          where: {
            email: data.email,
          },
        });

        if (adminMatch.docs.length > 0) {
          data.access = {
            read: () => true,
            update: () => true,
            delete: () => true,
            create: () => true,
          };
        }

        return {
          ...data,
          isAdmin: adminMatch.docs.length > 0,
        };
      },
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
    {
      name: "subscriptions",
      type: "relationship",
      relationTo: "subscription",
      hasMany: true,
      hidden: true,
    },
  ],
};
