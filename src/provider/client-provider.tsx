"use client";
import { ThemeProvider } from "./theme-provider";
import MainLayout from "@/layouts/main-layout";

export default function ClientProvider({
  children,
  isAdmin,
}: {
  children: React.ReactNode;
  isAdmin: boolean | undefined | null;
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <MainLayout isAdmin={isAdmin}>{children}</MainLayout>
    </ThemeProvider>
  );
}
