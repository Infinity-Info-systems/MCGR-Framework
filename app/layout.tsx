import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MCGR Framework",
  description: "Multi-Cloud Governance and Site Reliability Engineering Framework",
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
