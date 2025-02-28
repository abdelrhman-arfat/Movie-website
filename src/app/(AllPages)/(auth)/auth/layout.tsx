export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="w-screen min-h-screen bg-neutral-950">{children}</main>;
}
