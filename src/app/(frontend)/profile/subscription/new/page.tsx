import NewSubscribtionView from "@/views/subscribtion/new-subscribtion-view";
import { notFound } from "next/navigation";
import { getPayload } from "payload";
import config from "@/payload.config";
import { headers as getHeaders } from "next/headers";
import ContentWrapper from "@/wrapper/content-wrapper";
import type { Subscription } from "@/payload-types";
export default async function NewSubscriptionPage() {
  const headers = await getHeaders();
  const payloadConfig = await config;
  const payload = await getPayload({ config: payloadConfig });
  const { user } = await payload.auth({ headers });

  if (!user) notFound();
  const userSubscription = user.subscription?.docs?.[0] as Subscription;
  if (userSubscription?.isActive) {
    return (
      <ContentWrapper>
        <div className="flex flex-col gap-4 items-center justify-center h-full">
          <h1 className="text-2xl font-bold">
            Du har allerede et aktivt abonnement
          </h1>
          <p>
            Du kan ikke opprette et nytt abonnement før det gjeldeende
            abonnement utløper eller blir kansellert.
          </p>
        </div>
      </ContentWrapper>
    );
  }

  return <NewSubscribtionView user={user} />;
}
