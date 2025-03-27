import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { getPayload } from "payload";
import config from "@/payload.config";
import { headers as getHeaders } from "next/headers";
import ContentWrapper from "@/wrapper/content-wrapper";
import SignOutButton from "@/components/profile/sign-out-button";
import axios from "axios";
export default async function ProfilPage() {
  const headers = await getHeaders();
  const payloadConfig = await config;
  const payload = await getPayload({ config: payloadConfig });
  const { user } = await payload.auth({ headers });

  return (
    <ContentWrapper>
      <div className="flex items-center justify-center h-full">
        <Card>
          <CardHeader>
            <CardTitle>Profil</CardTitle>
            <SignOutButton />
          </CardHeader>
        </Card>
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </div>
    </ContentWrapper>
  );
}
