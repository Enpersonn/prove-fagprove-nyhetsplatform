"use client";
import AcceptFormTermsSection from "@/components/subscription/new/accept-form-terms-section";
import PaymentForm from "@/components/subscription/new/payment-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import type { Subscription, User } from "@/payload-types";
import ContentWrapper from "@/wrapper/content-wrapper";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { newSubscriptionSchema } from "@/schemas/new-subscription-schema";
export default function NewSubscribtionView({ user }: { user: User }) {
  const userSubscription = user.subscription?.docs?.[0] as Subscription;

  const form = useForm({
    resolver: zodResolver(newSubscriptionSchema),
    mode: "onChange",
    defaultValues: {
      acceptTerms: false,
      acceptPrivacy: false,
      paymentMethod: "card",
      cardDetails: {
        cardNumber: "",
        cardExpiry: "",
        cardCvc: "",
      },
    },
  });

  const handleSubmit = async () => {
    toast.promise(
      (async () => {
        if (userSubscription) {
          await axios.patch(`/api/subscription/${userSubscription.id}`, {
            isActive: true,
            activatedAt: new Date().toISOString(),
            nextPaymentDate: new Date(
              new Date().setMonth(new Date().getMonth() + 1)
            ).toISOString(),
            expiresAt: new Date(
              new Date().setMonth(new Date().getMonth() + 1)
            ).toISOString(),
          });
        } else {
          const payload: Partial<Subscription> = {
            email: user,
            isActive: true,
            activatedAt: new Date().toISOString(),
            nextPaymentDate: new Date(
              new Date().setMonth(new Date().getMonth() + 1)
            ).toISOString(),
            expiresAt: new Date(
              new Date().setMonth(new Date().getMonth() + 1)
            ).toISOString(),
          };
          await axios.post("/api/subscription", payload);
        }
        window.location.href = "/profile/subscription";
      })(),
      {
        loading: "Oppretter abonnement...",
        success: "Abonnement opprettet!",
        error: "Noe gikk galt",
      }
    );
  };
  return (
    <ContentWrapper>
      <div className="flex flex-col gap-4 items-center justify-center h-full">
        <h1 className="text-2xl font-bold">Nytt abonnement</h1>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="flex flex-col gap-4 w-full"
          >
            <PaymentForm />
            <AcceptFormTermsSection />
            <div className="flex justify-end">
              <Button type="submit" disabled={!form.formState.isValid}>
                Opprett abonnement
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </ContentWrapper>
  );
}
