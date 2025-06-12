export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      {/* <Navbar /> */}
      <main className="px-4">{children}</main>
    </div>
  );
}
