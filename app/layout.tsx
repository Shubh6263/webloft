import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Webloft – Curated Websites by Category",
  description:
    "Webloft is a curated directory of useful websites, organized category-wise to help you discover the best tools and platforms easily.",
  verification: {
    google: "pxtle4IzrRYLLYZKv4M2McWchQSVI2jP6jOfZsjXWyI",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
