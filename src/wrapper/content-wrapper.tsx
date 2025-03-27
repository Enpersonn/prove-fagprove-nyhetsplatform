export default function ContentWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-7xl w-full mx-auto grid grid-cols-12 gap-4 px-4">
      <div className="col-span-12 md:col-start-2 md:col-span-10 w-full ">
        {children}
      </div>
    </div>
  );
}
