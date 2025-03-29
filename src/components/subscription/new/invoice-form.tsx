import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";

const InvoiceForm = () => {
  const form = useFormContext();
  return (
    <div className="grid grid-cols-2 gap-4">
      <FormField
        control={form.control}
        name="invoiceDetails.invoiceName"
        render={({ field }) => (
          <FormItem className="col-span-2">
            <FormLabel>Navn</FormLabel>
            <FormControl>
              <Input {...field} placeholder="Ola Nordmann" />
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="invoiceDetails.invoiceAddress"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Adresse</FormLabel>
            <FormControl>
              <Input {...field} placeholder="parkveien 123" />
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="invoiceDetails.invoiceZip"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Postnummer</FormLabel>
            <FormControl>
              <Input {...field} placeholder="1234" />
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="invoiceDetails.invoiceCity"
        render={({ field }) => (
          <FormItem>
            <FormLabel>By</FormLabel>
            <FormControl>
              <Input {...field} placeholder="Oslo" />
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="invoiceDetails.invoiceCountry"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Land</FormLabel>
            <FormControl>
              <Input {...field} placeholder="Norge" />
            </FormControl>
          </FormItem>
        )}
      />
    </div>
  );
};

export default InvoiceForm;
