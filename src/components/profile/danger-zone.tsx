"use client";
import {
  Card,
  CardTitle,
  CardContent,
  CardHeader,
  CardFooter,
} from "../ui/card";
import { Button } from "../ui/button";
import axios from "axios";
import type { User, Subscription } from "@/payload-types";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "../ui/dialog";
export default function DangerZone({ user }: { user: User }) {
  const router = useRouter();
  const handleDeleteAccount = async () => {
    toast.promise(
      async () => {
        if (user.subscription?.docs?.[0]) {
          const subscription = user.subscription?.docs?.[0] as Subscription;
          await axios.delete(`/api/subscription/${subscription.id}`);
        }
        await axios.delete(`/api/users/${user.id}`);
        router.refresh();
      },
      {
        loading: "Sletter konto...",
        success: "Konto slettet",
        error: "Feil ved sletting av konto",
      }
    );
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-red-500">Slett konto</CardTitle>
      </CardHeader>
      <CardContent>
        <p>
          Denne handlingen er bestemt ikke reversibel. Den vil slette all
          informasjon knyttet til kontoen din.
        </p>
      </CardContent>
      <CardFooter>
        <Dialog>
          <DialogTrigger asChild>
            <Button aria-label="Slett konto" variant="destructive">
              Slett konto
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Slett konto</DialogTitle>
            </DialogHeader>
            <DialogDescription>
              Er du sikker på at du vil permanent slette kontoen din? Denne
              handlingen kan som sagt ikke reverseres.
            </DialogDescription>
            <DialogFooter>
              <Button
                aria-label="Slett konto"
                variant="destructive"
                onClick={handleDeleteAccount}
              >
                Slett konto
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
}
