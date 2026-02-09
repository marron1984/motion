import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Motion Portfolio | Design that moves you",
  description:
    "A mobile-first animated portfolio showcasing crafted motion, visual storytelling, and pixel-perfect design.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="dark">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
