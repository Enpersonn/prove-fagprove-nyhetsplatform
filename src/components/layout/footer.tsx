import ContentWrapper from "@/wrapper/content-wrapper";
import Link from "next/link";
import { Button } from "../ui/button";

const Footer = () => {
  return (
    <footer className=" border border-t ">
      <ContentWrapper>
        <div className="py-8 ">
          <div className="flex h-full justify-between items-center gap-8">
            <div className="flex h-full flex-col justify-between">
              <div className="font-anton text-2xl h-full">
                <Link href="/">1984 NEWS</Link>
              </div>
              <p className="text-sm ">
                &copy; {new Date().getFullYear()} 1984 NEWS. All rights
                reserved.
              </p>
            </div>
            <div className="flex justify-center gap-4 text-sm text-muted-foreground">
              <Button variant="link" asChild className="items-start">
                <Link href="/">Om oss</Link>
              </Button>
              <Button variant="link" asChild className="items-start">
                <Link href="/">Kontakt</Link>
              </Button>
              <Button variant="link" asChild className="text-left">
                <Link href="/">Personvern</Link>
              </Button>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
