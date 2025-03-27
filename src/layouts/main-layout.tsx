import Footer from "@/components/layout/footer";
import AdminButton from "./admin-button";
import TopNavigationBar from "./top-navigation-bar";
export default function MainLayout({
  isAdmin,
  isAuthorized,
  children,
}: {
  isAdmin: boolean | undefined | null;
  isAuthorized: boolean | undefined | null;
  children: React.ReactNode;
}) {
  return (
    <div className="h-full">
      <AdminButton isAdmin={isAdmin} />
      <TopNavigationBar isAuthorized={isAuthorized} />
      <div className="h-full flex flex-col pt-20">
        <main className="min-h-[calc(100vh-80px)] h-full">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
