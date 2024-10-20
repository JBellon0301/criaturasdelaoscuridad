import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Pirata_One } from "next/font/google";
import { pirataOne, robotoSlab } from "@/config/fonts";

export const metadata: Metadata = {
  title: "Criaturas de la Oscuridad",
  description: "Hackatho Cloudinary Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${pirataOne.className} ${robotoSlab.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
