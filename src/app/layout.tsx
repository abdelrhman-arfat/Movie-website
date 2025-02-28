import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import AppProvider from "./_RTK/provider/AppProvider";
import { WarningMessage } from "./components/common/WorrningMessage";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Movies App",
  description:
    "Movies app that shows Favorites movies around the world with popular movies and actors ",
  authors: [
    {
      name: "AbdAlRhman Yasser Arafat",
      url: "https://github.com/abdelrhman-arfat?tab=repositories",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased`}>
        <WarningMessage />
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
