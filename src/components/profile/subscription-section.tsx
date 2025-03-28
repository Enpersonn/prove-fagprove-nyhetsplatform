import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Subscription } from "@/payload-types";
import { PlusIcon } from "lucide-react";

const SubscriptionSection = ({
  activeSubscription,
}: {
  activeSubscription: Subscription;
}) => {
  if (!activeSubscription || !activeSubscription.isActive)
    return (
      <Card className="w-full h-[200px]">
        <CardHeader className="h-full w-full flex items-center justify-center">
          <Button asChild>
            <Link href="/profile/subscription/new">
              <PlusIcon className="size-4" />
              Opprett abonnement
            </Link>
          </Button>
        </CardHeader>
      </Card>
    );

  return (
    <Card className="w-full h-[200px]">
      <CardHeader>
        <div className="w-full flex justify-between items-center">
          <CardTitle>Ditt abonnement</CardTitle>
          <Button asChild>
            <Link href="/profile/subscription/">Administrer</Link>
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div>
          <p>
            Startdato:{" "}
            <span className="font-bold">
              {(activeSubscription as Subscription).activatedAt
                ? new Date(
                    (activeSubscription as Subscription).activatedAt ?? ""
                  ).toLocaleDateString()
                : "Ukjent"}
            </span>
          </p>
          <p>
            Neste betaling:{" "}
            <span className="font-bold">
              {(activeSubscription as Subscription).nextPaymentDate
                ? new Date(
                    (activeSubscription as Subscription).nextPaymentDate ?? ""
                  ).toLocaleDateString()
                : "Ukjent"}
            </span>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default SubscriptionSection;
