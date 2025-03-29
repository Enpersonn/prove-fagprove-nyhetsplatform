import { z } from "zod";

export const cardFormSchema = z.object({
  cardNumber: z.string().min(16).max(16),
  cardExpiry: z.string().min(4).max(4),
  cardCvc: z.string().min(3).max(3),
});
