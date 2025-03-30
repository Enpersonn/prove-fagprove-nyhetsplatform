"use client";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ContentBlock = () => {
  const router = useRouter();
  return (
    <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-background via-background/80 to-transparent z-10 flex items-center justify-center">
      <Card className="flex flex-col gap-4 text-center p-4">
        <div className="flex flex-col gap-2 text-center">
          <h2 className="text-2xl font-bold">Premium innhold</h2>
          <p className="text-sm text-muted-foreground">
            Denne artikkelen er reservert kun for abbonenter
          </p>
        </div>
        <div className=" flex gap-2 w-full justify-center items-center">
          <Button
            aria-label="Gå tilbake"
            onClick={() => router.back()}
            variant="outline"
          >
            Gå tilbake
          </Button>
          <Button asChild>
            <Link aria-label="Abonner" href="/profile/subscription/new">
              Abonner
            </Link>
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default ContentBlock;
