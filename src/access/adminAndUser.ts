import type { Access } from "payload";

export const adminsAndUser: Access = ({ req: { user } }) => {
  if (user?.isAdmin) {
    return true;
  }

  if (user) {
    return {
      email: {
        equals: user.email,
      },
    };
  }

  return false;
};

//@ts-expect-error - This is a workaround to the fact that the subscription field is not a relationship
export const adminAndUserOwnsSubscription: Access = ({ req: { user } }) => {
  if (user?.isAdmin) {
    return true;
  }

  if (user) {
    return {
      subscription: {
        some: {
          email: {
            equals: user.email,
          },
        },
      },
    };
  }

  return false;
};
