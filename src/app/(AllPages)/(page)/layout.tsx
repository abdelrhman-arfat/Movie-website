import { Navbar } from "@/app/components/navbar/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen  bg-neutral-950">
      <Navbar />
      {children}
      Footer
    </main>
  );
}
