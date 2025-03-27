"use client";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "./theme-provider";
import MainLayout from "@/layouts/main-layout";

export default function ClientProvider({
  children,
  isAdmin,
  isAuthorized,
}: {
  children: React.ReactNode;
  isAdmin: boolean | undefined | null;
  isAuthorized: boolean | undefined | null;
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <MainLayout isAdmin={isAdmin} isAuthorized={isAuthorized}>
        {children}
      </MainLayout>
      <Toaster />
    </ThemeProvider>
  );
}
