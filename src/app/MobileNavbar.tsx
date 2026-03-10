'use client';
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";


export default function MobileNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black h-24 flex items-center justify-between px-4 z-50 shadow-md">
      {/* Desktop logo */}
      <div className="flex-1 hidden md:flex justify-start">
        <Image
          src="/RelentlessWrapsLogoV2.png"
          alt="Logo"
          width={140}
          height={140}
        />
      </div>

      {/* Desktop links */}
      <div className="hidden md:flex flex-1 absolute left-1/2 -translate-x-1/2 gap-4">
        <Link href="/" className="navButtonDesktop">Home</Link>
        <Link href="/tints" className="navButtonDesktop">Tints</Link>
        <Link href="/wraps" className="navButtonDesktop">Wraps</Link>
        <Link href="/ppf" className="navButtonDesktop">PPF</Link>
      </div>

      {/* Mobile logo + hamburger */}
      <div className="flex md:hidden flex-1 items-center justify-end relative">
        {/* Centered logo */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <Image
            src="/RelentlessWrapsLogoV2.png"
            alt="Logo"
            width={100}
            height={100}
          />
        </div>

        {/* Hamburger button */}
        <button
          className="text-white text-3xl z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          &#9776;
        </button>
      </div>

      {/* Mobile menu with smooth slide down */}
      <div
        className={`md:hidden fixed top-24 left-0 w-full h-[calc(100vh-6rem)] bg-black 
        flex flex-col items-center justify-center gap-14 z-40 pb-50
        transition-[max-height,opacity] duration-300 ease-in-out
        ${mobileMenuOpen ? "opacity-100" : "max-h-0 opacity-0"}`}
      >
        <Link href="/" className="navButtonMobile" onClick={() => setMobileMenuOpen(false)}>Home</Link>
        <Link href="/tints" className="navButtonMobile" onClick={() => setMobileMenuOpen(false)}>Tints</Link>
        <Link href="/wraps" className="navButtonMobile" onClick={() => setMobileMenuOpen(false)}>Wraps</Link>
        <Link href="/ppf" className="navButtonMobile" onClick={() => setMobileMenuOpen(false)}>PPF</Link>
      </div>
    </nav>
  );
}