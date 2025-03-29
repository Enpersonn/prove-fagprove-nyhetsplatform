import { z } from "zod";
import { invoiceFormSchema } from "./invoice-schema";
import { cardFormSchema } from "./card-schema";

export const paymentFormSchema = z.discriminatedUnion("paymentMethod", [
  z.object({
    paymentMethod: z.literal("card"),
    cardDetails: cardFormSchema,
  }),
  z.object({
    paymentMethod: z.literal("invoice"),
    invoiceDetails: invoiceFormSchema,
  }),
]);
