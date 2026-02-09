import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DHP HOSPITALITY | 信頼と革新が紡ぐ、至高の滞在体験",
  description:
    "医療・介護の現場で磨かれた信念。ホテル開発、ブランド誘致、FC運営管理、そして医療とホスピタリティの融合。DHP HOSPITALITY.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0a0a08",
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
