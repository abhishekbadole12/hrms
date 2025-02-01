import type { Metadata } from "next";
import { Geist, Geist_Mono, Open_Sans } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/sidebar/sidebar";
import BreadCrumb from "@/components/bread-crumb/bread-crumb";
import Header from "@/components/header/header";

// fontawesome
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HRMS",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${openSans.variable} antialiased`}
      >
        <main className="w-[100vw] h-[100vh] flex p-4 pr-0">
          <Sidebar />
          <section className="w-full h-full py-2 px-10">
            <Header />
            {/* <BreadCrumb title="Dashboard"/> */}
            {children}
          </section>
        </main>
      </body>
    </html>
  );
}
