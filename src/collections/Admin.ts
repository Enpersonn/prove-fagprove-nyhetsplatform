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
      async ({ data, req }) => {
        const userMatch = await req.payload.find({
          collection: "users",
          where: {
            email: data.email,
          },
        });
        if (userMatch.docs.length === 0) {
          const newUser = await req.payload.create({
            collection: "users",
            data: {
              email: data.email,
              isAdmin: true,
            },
          });

          return {
            ...data,
            subscriptions: newUser.subscriptions || [],
            isAdmin: true,
          };
        }
        return {
          ...data,
          subscriptions:
            userMatch.docs.length > 0 ? userMatch.docs[0].subscriptions : [],
          isAdmin: true,
        };
      },
    ],
  },
  fields: [
    {
      name: "isAdmin",
      type: "checkbox",
      defaultValue: true,
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
