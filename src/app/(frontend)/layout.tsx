import type React from "react";
import "./styles.css";
import { headers as getHeaders } from "next/headers.js";
import { getPayload } from "payload";
import config from "@/payload.config";
import ClientProvider from "@/provider/client-provider";
import { Kantumruy_Pro, Anton } from "next/font/google";

const kantumruyPro = Kantumruy_Pro({
  subsets: ["khmer"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-kantumruy-pro",
});

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-anton",
});

export const metadata = {
  description: "A blank template using Payload in a Next.js app.",
  title: "Payload Blank Template",
};

export default async function RootLayout(props: { children: React.ReactNode }) {
  const headers = await getHeaders();
  const payloadConfig = await config;
  const payload = await getPayload({ config: payloadConfig });
  const { user } = await payload.auth({ headers });
  const isAdmin = user?.isAdmin;
  const isAuthorized = !!user;
  return (
    <html lang="en">
      <body className={`${kantumruyPro.variable} ${anton.variable} font-sans`}>
        <ClientProvider isAdmin={isAdmin} isAuthorized={isAuthorized}>
          {props.children}
        </ClientProvider>
      </body>
    </html>
  );
}
