import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";
import { z } from "zod";

export const cardFormSchema = z.object({
  cardNumber: z.string().min(16).max(16),
  cardExpiry: z.string().min(4).max(4),
  cardCvc: z.string().min(3).max(3),
});

const CardForm = () => {
  const form = useFormContext();
  return (
    <div className="grid grid-cols-2 gap-4">
      <FormField
        control={form.control}
        name="cardDetails.cardNumber"
        render={({ field }) => (
          <FormItem className="col-span-2">
            <FormLabel>Kortnummer</FormLabel>
            <FormControl>
              <Input
                {...field}
                value={field.value.replace(/\D/g, "")}
                maxLength={16}
                placeholder="1234 1234 1234 1234"
              />
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="cardDetails.cardExpiry"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Utløpsdato</FormLabel>
            <FormControl>
              <Input
                {...field}
                value={field.value.replace(/\D/g, "")}
                maxLength={4}
                placeholder="MM/YY"
              />
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="cardDetails.cardCvc"
        render={({ field }) => (
          <FormItem>
            <FormLabel>CVC</FormLabel>
            <FormControl>
              <Input
                {...field}
                value={field.value.replace(/\D/g, "")}
                maxLength={3}
                placeholder="123"
              />
            </FormControl>
          </FormItem>
        )}
      />
    </div>
  );
};

export default CardForm;
