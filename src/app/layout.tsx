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
      <body className="lg:p-0 lg:gap-0 xl:gap-2 xl:p-4 caret-transparent h-screen bg-center bg-no-repeat bg-cover flex flex-col justify-center items-center">
        {children}
      </body>
    </html>
  );
}
