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
import Link from "next/link";
import { useRouter } from "next/navigation";
export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export default function LoginPage() {
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
    },
  });

  const handleLogin = async () => {
    try {
      await axios.post("/api/users/login", form.getValues());
      window.location.href = "/profile";
    } catch (error) {
      console.log(error);
    }
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
                <Button type="submit">Login</Button>
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
