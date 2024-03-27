import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "../styles/globals.css";
import { cn } from "@/lib/utils";

const IBMPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex",
});

export const metadata: Metadata = {
  title: "PixelAI Studio",
  description:
    "Transform your images with ease using PixelAI Studio, an AI-powered image editing platform. Enhance, edit, and create stunning visuals effortlessly with our advanced AI algorithms. Try it now for professional-quality results!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("font-IBMPlex antialiased", IBMPlex.variable)}>
        {children}
      </body>
    </html>
  );
}
