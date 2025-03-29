import { z } from "zod";

export const invoiceFormSchema = z.object({
  invoiceName: z.string().min(1),
  invoiceAddress: z.string().min(1),
  invoiceZip: z.string().min(4).max(4),
  invoiceCity: z.string().min(1),
  invoiceCountry: z.string().min(1),
});
