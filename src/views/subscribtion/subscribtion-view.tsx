"use client";
import { Button } from "@/components/ui/button";
import type { Subscription } from "@/payload-types";
import ContentWrapper from "@/wrapper/content-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
export default function SubscribtionView({
  userSubscription,
}: {
  userSubscription: Subscription;
}) {
  const router = useRouter();
  const handleCancelSubscription = async () => {
    toast.promise(
      (async () => {
        await axios.patch(`/api/subscription/${userSubscription.id}`, {
          isActive: false,
          nextPaymentDate: null,
          expiresAt: null,
          activatedAt: null,
        });
        router.refresh();
      })(),
      {
        loading: "Avslutter abonnement...",
        success: "Abonnement avsluttet!",
        error: "Noe gikk galt",
      }
    );
  };
  return (
    <ContentWrapper>
      <Card className="w-full h-[200px]">
        <CardHeader>
          <div className="w-full flex justify-between items-center">
            <CardTitle>Ditt abonnement</CardTitle>
            <Button onClick={handleCancelSubscription}>
              Avslutt abonnement
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div>
            <p>
              Startdato:
              <span className="font-bold">
                {userSubscription.activatedAt
                  ? new Date(
                      userSubscription.activatedAt ?? ""
                    ).toLocaleDateString()
                  : "Ukjent"}
              </span>
            </p>
            <p>
              Neste betaling:
              <span className="font-bold">
                {userSubscription.nextPaymentDate
                  ? new Date(
                      userSubscription.nextPaymentDate ?? ""
                    ).toLocaleDateString()
                  : "Ukjent"}
              </span>
            </p>
          </div>
        </CardContent>
      </Card>
    </ContentWrapper>
  );
}
