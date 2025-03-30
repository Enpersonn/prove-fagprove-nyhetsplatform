import { Checkbox } from "@/components/ui/checkbox";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import Link from "next/link";
import { useFormContext } from "react-hook-form";

const AcceptFormTermsSection = () => {
  const form = useFormContext();
  return (
    <div className="flex flex-col gap-2">
      <FormField
        control={form.control}
        name="acceptTerms"
        render={({ field }) => (
          <FormItem className="flex items-center gap-2">
            <FormControl>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <FormLabel className="flex items-center gap-2">
              Jeg godtar
              <Link
                aria-label="Betalingsbetingelser"
                href="/betalingsbetingelser"
                className="underline"
              >
                betalingsbetingelser
              </Link>
            </FormLabel>
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="acceptPrivacy"
        render={({ field }) => (
          <FormItem className="flex items-center gap-2">
            <FormControl>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <FormLabel className="flex items-center gap-2">
              Jeg godtar
              <Link
                aria-label="Personvern"
                href="/personvern"
                className="underline"
              >
                personvern
              </Link>
            </FormLabel>
          </FormItem>
        )}
      />
    </div>
  );
};

export default AcceptFormTermsSection;
