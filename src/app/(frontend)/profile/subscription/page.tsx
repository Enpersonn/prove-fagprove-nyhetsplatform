import SubscribtionView from "@/views/subscribtion/subscribtion-view";
import { notFound, redirect } from "next/navigation";
import { getPayload } from "payload";
import config from "@/payload.config";
import { headers as getHeaders } from "next/headers";
import type { Subscription } from "@/payload-types";

export default async function SubscriptionPage() {
  const headers = await getHeaders();
  const payloadConfig = await config;
  const payload = await getPayload({ config: payloadConfig });
  const { user } = await payload.auth({ headers });

  if (!user) notFound();
  const userSubscription = user.subscription?.docs?.[0] as Subscription;
  if (!userSubscription.isActive) redirect("/profile/subscription/new");
  return <SubscribtionView userSubscription={userSubscription} />;
}
