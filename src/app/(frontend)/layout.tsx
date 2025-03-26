import type React from "react";
import "./styles.css";
import { headers as getHeaders } from "next/headers.js";
import { getPayload } from "payload";
import config from "@/payload.config";
import ClientProvider from "@/provider/client-provider";

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
  return (
    <html lang="en">
      <body>
        <ClientProvider isAdmin={isAdmin}>{props.children}</ClientProvider>
      </body>
    </html>
  );
}
