import config from "@/payload.config";
import { getPayload } from "payload";
import { headers as getHeaders } from "next/headers";
import ContentWrapper from "@/wrapper/content-wrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default async function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headers = await getHeaders();
  const payloadConfig = await config;
  const payload = await getPayload({ config: payloadConfig });
  const { user } = await payload.auth({ headers });
  if (!user)
    return (
      <ContentWrapper>
        <div className="flex items-center justify-center h-content w-full">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                Du må være logget inn for å se denne siden
              </CardTitle>
              <CardDescription className="text-center">
                Vennligst logg inn for å få tilgang til din profil og andre
                eksklusive funksjoner.
              </CardDescription>
            </CardHeader>

            <CardContent>
              <div className="flex gap-2 w-full justify-center">
                <Button asChild>
                  <Link href="/">Gå tilbake</Link>
                </Button>
                <Button asChild>
                  <Link href="/login">Logg inn</Link>
                </Button>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col justify-end items-center">
              <p className="text-sm text-muted-foreground">
                Har du ikke en konto?
              </p>
              <Button asChild variant="link">
                <Link href="/signup">Registrer deg</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </ContentWrapper>
    );

  return <div>{children}</div>;
}
