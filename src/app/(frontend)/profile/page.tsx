import { getPayload } from "payload";
import config from "@/payload.config";
import { headers as getHeaders } from "next/headers";
import ProfileView from "@/views/profile/profile-view";
import { notFound } from "next/navigation";
export default async function ProfilPage() {
  const headers = await getHeaders();
  const payloadConfig = await config;
  const payload = await getPayload({ config: payloadConfig });
  const { user } = await payload.auth({ headers });

  if (!user) notFound();

  return <ProfileView user={user} />;
}
