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
