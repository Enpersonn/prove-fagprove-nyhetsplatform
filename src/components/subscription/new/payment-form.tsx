import { z } from "zod";
import InvoiceForm, { invoiceFormSchema } from "./invoice-form";
import CardForm, { cardFormSchema } from "./card-form";
import { useFormContext } from "react-hook-form";
import PaymentRadio from "./payment-radio";
import { Card, CardContent, CardTitle, CardHeader } from "@/components/ui/card";

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

const PaymentForm = () => {
  const form = useFormContext();
  return (
    <Card className="w-full">
      <CardHeader className="w-full">
        <CardTitle>Betalingsmetode</CardTitle>
        <PaymentRadio />
      </CardHeader>
      <CardContent>
        {form.watch("paymentMethod") === "card" && <CardForm />}
        {form.watch("paymentMethod") === "invoice" && <InvoiceForm />}
      </CardContent>
    </Card>
  );
};

export default PaymentForm;
