import ContentWrapper from "@/wrapper/content-wrapper";
import Link from "next/link";
import { Button } from "../ui/button";

const Footer = () => {
  return (
    <footer className=" border border-t ">
      <ContentWrapper>
        <div className="py-8 ">
          <div className="flex h-full justify-between items-center gap-4 md:gap-8">
            <div className="flex h-full flex-col justify-between">
              <div className="font-anton text-2xl h-full">
                <Link aria-label="Hjem" href="/">
                  1984 NEWS
                </Link>
              </div>
              <p className="text-sm hidden md:block ">
                &copy; {new Date().getFullYear()} 1984 NEWS. All rights
                reserved.
              </p>
            </div>
            <div className="flex justify-center md:gap-4 text-sm text-muted-foreground">
              <Button variant="link" asChild className="items-start">
                <Link aria-label="Om oss" href="/">
                  Om oss
                </Link>
              </Button>
              <Button variant="link" asChild className="items-start">
                <Link aria-label="Kontakt" href="/">
                  Kontakt
                </Link>
              </Button>
              <Button variant="link" asChild className="text-left">
                <Link aria-label="Personvern" href="/">
                  Personvern
                </Link>
              </Button>
            </div>
          </div>
          <p className="text-sm  md:hidden ">
            &copy; {new Date().getFullYear()} 1984 NEWS. All rights reserved.
          </p>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
