import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// import sample from "../../public/sample.jpg";
import linkedin from "../../public/linkedin.svg";
import github from "../../public/github.svg";
import "./globals.css";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Sai Maheshwar Reddy Portfolio",
};

//👇 Import Open Sans font
import { Heebo } from "next/font/google";
import SideNav from "@/components/SideNav";
import Image from "next/image";

//👇 Configure our font object
const heebo = Heebo({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={heebo.className}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SideNav />

        <div className="sm:pt-24 pt-20 mx-auto xl:w-[75%] 2xl:w-[68%]">
          {children}
        </div>
        <footer className="p-12">
          <p className="text-center text-lg mb-4 font-semibold text-gray-600">
            Follow me on
          </p>

          <div className="flex justify-center items-center  gap-8">
            <Image src={linkedin} width={30} alt="linkedin" />
            <Image src={github} width={30} alt="github" />
          </div>
        </footer>
      </body>
    </html>
  );
}
