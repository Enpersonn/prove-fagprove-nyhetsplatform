export default function ContentWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-12 gap-4 px-4">
      <div className="col-start-2 col-span-10 lg:col-start-3 lg:col-span-8">
        {children}
      </div>
    </div>
  );
}
