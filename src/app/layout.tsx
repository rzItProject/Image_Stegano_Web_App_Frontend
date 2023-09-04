import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Image Stegano Web Application",
  description: "Platform for steganographic digital image signing",
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
