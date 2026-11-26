import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shubham Saini | Full-Stack Web Developer",
  description:
    "Shubham Saini builds modern, scalable, and user-friendly web applications.",
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
