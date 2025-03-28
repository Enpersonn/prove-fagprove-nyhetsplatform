"use client";
import type { User } from "@/payload-types";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Card, CardTitle, CardHeader, CardContent } from "../ui/card";
import axios from "axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
interface EditProfileFormProps {
  user: User;
}

const formSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  displayName: z.string().min(1),
});

const EditProfileForm = ({ user }: EditProfileFormProps) => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: user.firstName ?? "",
      lastName: user.lastName ?? "",
      displayName: user.displayName ?? "",
    },
  });
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    toast.promise(
      axios.patch(`/api/users/${user.id}`, data).then(() => {
        toast.success("Profil oppdatert");
        router.refresh();
      }),
      {
        loading: "Oppdaterer profil...",
        success: "Profil oppdatert",
        error: "Feil ved oppdatering av profil",
      }
    );
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Rediger profil</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Fornavn</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Etternavn</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="displayName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Visningsnavn</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex justify-end">
              <Button type="submit">Lagre</Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default EditProfileForm;
