import { z } from "zod";
import { paymentFormSchema } from "./payment-schema";

export const newSubscriptionSchema = z
  .object({
    acceptTerms: z.boolean().refine((val) => val, {
      message: "Du må godta betalingsbetingelser",
    }),
    acceptPrivacy: z.boolean().refine((val) => val, {
      message: "Du må godta personvern",
    }),
  })
  .and(paymentFormSchema);
