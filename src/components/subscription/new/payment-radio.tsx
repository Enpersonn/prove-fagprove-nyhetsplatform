import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { useFormContext } from "react-hook-form";
import { CreditCard } from "lucide-react";

const PaymentRadio = () => {
  const form = useFormContext();
  return (
    <FormField
      control={form.control}
      name="paymentMethod"
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
            >
              <div className="flex items-center space-x-2 border p-4 w-full ">
                <RadioGroupItem value="card" id="card" />

                <FormLabel htmlFor="card" className="flex items-center">
                  <CreditCard className="mr-2 size-5" />
                  Kredittkort
                </FormLabel>
              </div>

              <div className="flex items-center space-x-2 border p-4 w-full">
                <RadioGroupItem value="invoice" id="invoice" />
                <FormLabel htmlFor="invoice">Faktura</FormLabel>
              </div>
            </RadioGroup>
          </FormControl>
        </FormItem>
      )}
    />
  );
};

export default PaymentRadio;
