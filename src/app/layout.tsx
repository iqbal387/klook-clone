import "./globals.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/grid";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Footer from "@/components/organisms/Footer";
import Navbar from "@/components/organisms/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Klook Travel",
  description: "Find your destinations",
  icons: "/images/logo/klook-mini.png",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <body className={inter.className}>
          <main className={`w-full min-h-screen ${inter}`}>
            <Navbar />

            {children}

            <Footer />
          </main>
        </body>
      </html>
    </>
  );
}
