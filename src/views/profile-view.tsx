import SignOutButton from "@/components/profile/sign-out-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Subscription, User } from "@/payload-types";
import ContentWrapper from "@/wrapper/content-wrapper";
export default function ProfileView({ user }: { user: User }) {
  const activeSubscription = user.subscriptions?.find(
    (x) => (x as Subscription).isActive
  );

  return (
    <ContentWrapper>
      <div className="flex flex-col gap-4 items-center justify-center h-full">
        <Card className="w-full">
          <CardHeader>
            <div className="w-full flex justify-between items-center">
              <CardTitle>Profil</CardTitle>
              <SignOutButton />
            </div>
          </CardHeader>
        </Card>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Ditt abonnement</CardTitle>
          </CardHeader>
          <CardContent>
            {activeSubscription ? (
              <p>Du har et aktivt abonnement</p>
            ) : (
              <p>Du har ingen aktive abonnementer</p>
            )}
          </CardContent>
        </Card>
      </div>
    </ContentWrapper>
  );
}
