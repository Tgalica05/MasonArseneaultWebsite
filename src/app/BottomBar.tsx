'use client';
import Link from "next/link";
import Image from "next/image";
import { Inter, Rubik_Gemstones, Bungee_Shade, Rubik_Glitch_Pop, Rubik_Glitch, Slabo_27px } from "next/font/google";

const slabo = Slabo_27px({ subsets: ["latin"], weight: "400" });

export default function BottomBar() {
  return (
    <div className="w-full bg-black px-6 py-6">       
      {/* Container */}
      <div className="max-w-6xl mx-auto flex items-center justify-between md:justify-center relative">

        {/* Contact Info */}
        <div className="text-white text-left md:text-center text-sm md:text-xl">
          <h2 className={`font-bold mb-2 text-lg md:text-3xl`}>
            Contact Us
          </h2>
          <p className={`text-sm md:text-xl ${slabo.className}`}>Email: relentlesswrapsct@gmail.com</p>
          <p className={`text-sm md:text-xl ${slabo.className} mt-1`}>Phone: +1 (860) 573-9952</p>
        </div>

        {/* TikTok (always right) */}
        {/* TikTok (always right) */}
        <div className="absolute right-0">
          <a
            href="https://www.tiktok.com/@relentlesswrapsct"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/TikTok.png"
              alt="TikTok"
              width={50}
              height={50}
              className="cursor-pointer hover:scale-110 transition-transform duration-200"
            />
          </a>
        </div>

      </div>
    </div>
  );
}