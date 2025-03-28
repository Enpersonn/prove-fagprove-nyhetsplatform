import SignOutButton from "@/components/profile/sign-out-button";
import SubscriptionSection from "@/components/profile/subscription-section";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import type { Subscription, User } from "@/payload-types";
import ContentWrapper from "@/wrapper/content-wrapper";
import EditProfileForm from "@/components/profile/edit-profile-form";
import DangerZone from "@/components/profile/danger-zone";
export default function ProfileView({ user }: { user: User }) {
  const activeSubscription = user.subscription?.docs?.[0] as Subscription;

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
        <EditProfileForm user={user} />
        <SubscriptionSection activeSubscription={activeSubscription} />
        <DangerZone user={user} />
      </div>
    </ContentWrapper>
  );
}
