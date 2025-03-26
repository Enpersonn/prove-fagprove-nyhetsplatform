import Link from "next/link";

export default function MainLayout({
  isAdmin,
  children,
}: {
  isAdmin: boolean | undefined | null;
  children: React.ReactNode;
}) {
  return (
    <div>
      {isAdmin && (
        <div className="fixed right-32 top-0 hover:bg-foreground/95 z-10 bg-foreground text-background px-2 py-1 ">
          <Link href="/admin">Admin</Link>
        </div>
      )}
      <nav className=" fixed top-0 left-0 right-0 mx-4 my-2 p-2 flex bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 items-center justify-between border ">
        <Link href="/">Home</Link>
      </nav>
      <div className="mt-16">{children}</div>
    </div>
  );
}
