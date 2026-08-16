import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Iwawe Properties",
  description:
    "Discover carefully selected homes and properties across Kigali with a simpler, more personal experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}