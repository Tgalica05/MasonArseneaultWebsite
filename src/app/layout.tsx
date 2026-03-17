import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Inter } from "next/font/google";
import MobileNavbar from "./MobileNavbar"; // client component
import BottomBar from "./BottomBar";


const inter = Inter({ subsets: ["latin"], });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Relentless Wraps CT",
  description: "Vehicle wraps, tints, and paint protection films",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>

        {/* Navbar */}
        <MobileNavbar/>

        {/* Page content */}
        <main className="pt-24">{children}</main>

        {/* Bottom bar */}
        <BottomBar/>

      </body>
    </html>
  );
}
