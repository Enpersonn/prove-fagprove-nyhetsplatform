import Link from "next/link";

const AdminButton = ({ isAdmin }: { isAdmin: boolean | undefined | null }) => {
  if (!isAdmin) return null;

  return (
    <div className="fixed right-32 top-0 hover:bg-foreground/95 z-50 bg-foreground text-background px-2 py-1 ">
      <Link aria-label="Admin" href="/admin">
        Admin
      </Link>
    </div>
  );
};

export default AdminButton;
