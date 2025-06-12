import Navbar from "@/components/navbar";

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      {/* <Navbar /> */}
      <main className="container mx-auto">{children}</main>
    </div>
  );
}
