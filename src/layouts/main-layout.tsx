import type { User, Admin } from "@/payload-types";
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
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          {isAdmin && (
            <li>
              <Link href="/admin">Admin</Link>
            </li>
          )}
        </ul>
      </nav>
      {children}
    </div>
  );
}
