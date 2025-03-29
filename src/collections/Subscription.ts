import {
  adminsAndUser,
  adminAndUserOwnsSubscription,
} from "@/access/adminAndUser";
import type { CollectionConfig } from "payload";

export const Subscription: CollectionConfig = {
  slug: "subscription",
  access: {
    read: () => true,
    create: adminsAndUser,
    update: adminAndUserOwnsSubscription,
    delete: adminAndUserOwnsSubscription,
  },
  hooks: {
    beforeRead: [
      ({ doc }) => {
        if (doc.expiresAt < new Date()) {
          doc.isActive = false;
        }
      },
    ],
    beforeChange: [
      ({ data, originalDoc }) => {
        if (
          data.nextPaymentDate &&
          data.nextPaymentDate !== originalDoc.nextPaymentDate
        ) {
          data.expiresAt = new Date(
            new Date(data.nextPaymentDate).setMonth(
              new Date(data.nextPaymentDate).getMonth() + 1
            )
          );
        }
      },
    ],
  },
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
      name: "activatedAt",
      type: "date",
      defaultValue: new Date(),
    },
    {
      name: "nextPaymentDate",
      type: "date",
      defaultValue: new Date(new Date().setMonth(new Date().getMonth() + 1)),
    },
    {
      name: "expiresAt",
      type: "date",
      defaultValue: new Date(new Date().setMonth(new Date().getMonth() + 1)),
    },
  ],
};
