import type { Metadata } from "next";
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
      <body className="h-screen bg-center bg-no-repeat bg-cover p-4 flex flex-col justify-center items-center gap-2">
        {children}
      </body>
    </html>
  );
}
