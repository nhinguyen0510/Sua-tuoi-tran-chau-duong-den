import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BridgeAU AI",
  description: "Translate international talent into Australian job-readiness"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
