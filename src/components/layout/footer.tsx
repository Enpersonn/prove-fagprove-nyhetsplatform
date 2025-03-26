import ContentWrapper from "@/wrapper/content-wrapper";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" h-80 border border-t py-8">
      <ContentWrapper>
        <div className="grid grid-cols-3 justify-between items-center gap-8 h-full">
          <div className="flex h-full flex-col justify-between ">
            <div className="font-anton text-2xl">
              <Link href="/">1985 NEWS</Link>
            </div>
            <p className="text-sm text-center">
              &copy; {new Date().getFullYear()} 1985 NEWS. All rights reserved.
            </p>
          </div>
          <div className="flex flex-col justify-center gap-4 text-sm text-muted-foreground">
            <Link href="/">Om oss</Link>
            <Link href="/">Kontakt</Link>
            <Link href="/">Personvern</Link>
            <Link href="/">Om oss</Link>
          </div>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
