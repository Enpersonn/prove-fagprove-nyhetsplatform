"use client";
import { Button } from "@/components/ui/button";
import ContentWrapper from "@/wrapper/content-wrapper";
import Link from "next/link";
import { ThemeProvider } from "@/provider/theme-provider";
import { useTheme } from "next-themes";
import { SunIcon } from "lucide-react";
import { MoonIcon } from "lucide-react";

const TopNavigationBar = ({
  isAuthorized,
}: {
  isAuthorized: boolean | undefined | null;
}) => {
  const { theme, setTheme } = useTheme();

  return (
    <ThemeProvider>
      <nav className="h-16 fixed top-0 left-0 z-40 right-0 mx-4 my-2 p-2 flex bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 items-center justify-between border ">
        <ContentWrapper>
          <div className="flex w-full justify-between items-center gap-4">
            <div className="font-anton text-2xl">
              <Link href="/">1984 NEWS</Link>
            </div>
            <div className="flex items-center gap-4">
              <Button
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                variant="ghost"
                size="icon"
              >
                {theme === "light" ? (
                  <MoonIcon className="size-4" />
                ) : (
                  <SunIcon className="size-4" />
                )}
              </Button>
              <Button variant="outline">
                {isAuthorized ? (
                  <Link href="/profile">Min Profil</Link>
                ) : (
                  <Link href="/login">Logg inn</Link>
                )}
              </Button>
            </div>
          </div>
        </ContentWrapper>
      </nav>
    </ThemeProvider>
  );
};

export default TopNavigationBar;
