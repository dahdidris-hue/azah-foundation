import type { Metadata } from "next";
import SiteChrome from "./SiteChrome";
import "./globals.css";

export const metadata: Metadata = {
  title: "Azah Charitable Foundation",
  description: "Restoring dignity, protection, and resilience across Sudan.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#F7F4EE] text-[#1E2A44]">
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
