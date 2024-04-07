import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header.tsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shuvrojit Biswas",
  description: "Full Stack Developer and Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="main-layout">
        {children}
        </div>
      </body>
    </html>
  );
}
