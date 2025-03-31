import { z } from "zod";

export const signupSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  displayName: z.string(),
  email: z.string().email(),
  password: z.string().min(8),
  confirmPassword: z.string().min(8),
  allowDataSaving: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms and conditions",
  }),
});
