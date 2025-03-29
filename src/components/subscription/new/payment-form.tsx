import InvoiceForm from "./invoice-form";
import CardForm from "./card-form";
import { useFormContext } from "react-hook-form";
import PaymentRadio from "./payment-radio";
import { Card, CardContent, CardTitle, CardHeader } from "@/components/ui/card";

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
