import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Coin Flip",
  description: "Heads or Tails? Find out!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
