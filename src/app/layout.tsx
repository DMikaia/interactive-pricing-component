import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Frontend Mentor | Interactive pricing component",
  description: "Coded by DMikaia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen bg-center bg-no-repeat bg-cover">
        {children}
      </body>
    </html>
  );
}
