"use client";
import ContentWrapper from "@/wrapper/content-wrapper";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Form,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardFooter } from "@/components/ui/card";
import axios from "axios";
import { toast } from "sonner";
import Link from "next/dist/client/link";
export const signupSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  displayName: z.string(),
  email: z.string().email(),
  password: z.string().min(8),
  confirmPassword: z.string().min(8),
});

export default function SignupPage() {
  const form = useForm({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const handleSignup = async () => {
    if (form.getValues().password !== form.getValues().confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    toast.promise(
      axios.post("/api/users", form.getValues()).then(async () => {
        const loginResponse = await axios.post("/api/users/login", {
          email: form.getValues().email,
          password: form.getValues().password,
        });
        if (loginResponse.status === 200) {
          window.location.href = "/profile";
        } else {
          throw new Error("Login failed");
        }
      }),
      {
        loading: "Signing up...",
        success: "Signup successful! Redirecting...",
        error: "Something went wrong",
      }
    );
  };
  return (
    <ContentWrapper>
      <div className="flex items-center justify-center h-full">
        <Card className="w-full p-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSignup)}>
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
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="col-span-2">
                      <FormLabel>Email*</FormLabel>
                      <FormControl>
                        <Input {...field} type="email" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Passord*</FormLabel>
                      <FormControl>
                        <Input {...field} type="password" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Bekreft passord*</FormLabel>
                      <FormControl>
                        <Input {...field} type="password" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex items-center justify-end pt-4">
                <Button type="submit">Signup</Button>
              </div>
            </form>
          </Form>
          <CardFooter>
            <Link
              href="/login"
              className=" text-sm text-muted-foreground hover:text-primary"
            >
              Already have an account? Login
            </Link>
          </CardFooter>
        </Card>
      </div>
    </ContentWrapper>
  );
}
