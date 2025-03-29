import ProfileLayoutView from "@/layouts/profile-layout";

export default async function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ProfileLayoutView>{children}</ProfileLayoutView>;
}
