import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = IBM_Plex_Sans({  subsets: ["latin"]
 , weight:['400', '700'] ,
 variable: '--font-ibm-plex' ,
 });

export const metadata: Metadata = {
  title: "Artistry aI",
  description: "Artistry AI is a cutting-edge platform leveraging artificial intelligence to unleash your creativity. Our intuitive tools empower users to explore new artistic horizons, offering a seamless experience from conception to realization. Created with Next.js, Artistry AI delivers unparalleled performance and flexibility, ensuring a smooth journey for every artist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn}>{children}</body>
    </html>
  );
}
