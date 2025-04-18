"use client";
import ContentWrapper from "@/wrapper/content-wrapper";
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
import Link from "next/link";
import { toast } from "sonner";
import { loginSchema } from "@/schemas/login-schema";
export default function LoginView() {
  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleLogin = async () => {
    toast.promise(
      axios.post("/api/users/login", form.getValues()).then(() => {
        window.location.href = "/profile";
      }),
      {
        loading: "Logg inn...",
        success: "Logget inn",
        error: "Feil ved logg inn",
      }
    );
  };

  return (
    <ContentWrapper>
      <div className="flex items-center justify-center h-full">
        <Card className="w-full p-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleLogin)}>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
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
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input {...field} type="password" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex items-center justify-end pt-4">
                <Button aria-label="Logg inn" type="submit">
                  Login
                </Button>
              </div>
            </form>
          </Form>
          <CardFooter>
            <Link
              href="/signup"
              className=" text-sm text-muted-foreground hover:text-primary"
            >
              Don&apos;t have an account? Sign up
            </Link>
          </CardFooter>
        </Card>
      </div>
    </ContentWrapper>
  );
}
