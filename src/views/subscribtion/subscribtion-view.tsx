"use client";
import { Button } from "@/components/ui/button";
import type { Subscription } from "@/payload-types";
import ContentWrapper from "@/wrapper/content-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import axios from "axios";

export default function SubscribtionView({
  userSubscription,
}: {
  userSubscription: Subscription;
}) {
  const handleCancelSubscription = async () => {
    try {
      await axios.patch(`/api/subscription/${userSubscription.id}`, {
        isActive: false,
      });
    } catch (error) {
      console.error(error);
    }
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
