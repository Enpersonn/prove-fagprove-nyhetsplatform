import { Button } from "@/components/ui/button";
import ContentWrapper from "@/wrapper/content-wrapper";
import Link from "next/link";

const TopNavigationBar = () => {
  return (
    <nav className="h-16 fixed top-0 left-0 z-40 right-0 mx-4 my-2 p-2 flex bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 items-center justify-between border ">
      <ContentWrapper>
        <div className="flex w-full justify-between items-center gap-4">
          <div className="font-anton text-2xl">
            <Link href="/">1985 NEWS</Link>
          </div>
          <Button variant="outline">
            <Link href="/login">Logg inn</Link>
          </Button>
        </div>
      </ContentWrapper>
    </nav>
  );
};

export default TopNavigationBar;
