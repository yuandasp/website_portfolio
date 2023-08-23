import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import FixedSidebar from "@/components/FixedSidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio Yuanda",
  description: "This web contains all portfolios of Yuanda",
  icons: {
    icon: "/icon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Navbar /> */}
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0 ">
          <div className="lg:flex lg:justify-between lg:gap-4">
            <FixedSidebar />
            <main className="pt-4 lg:py-24 lg:w-1/2">
              <section className="">{children}</section>
            </main>
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
