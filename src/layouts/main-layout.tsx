import Footer from "@/components/layout/footer";
import AdminButton from "./admin-button";
import TopNavigationBar from "./top-navigation-bar";
export default function MainLayout({
  isAdmin,
  children,
}: {
  isAdmin: boolean | undefined | null;
  children: React.ReactNode;
}) {
  return (
    <div className="h-full">
      <AdminButton isAdmin={isAdmin} />
      <TopNavigationBar />
      <div className="h-full flex flex-col gap-20 pt-20">
        <main className=" h-full">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
