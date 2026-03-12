'use client'
import Image from "next/image";
import { Inter, Rubik_Gemstones, Bungee_Shade, Rubik_Glitch_Pop, Rubik_Glitch, Slabo_27px } from "next/font/google";

const title = "Relentless Wraps";
const heading1 = `Transform and protect your vehicle with custom wraps, tints, 
and PPF brought to you from the greater Hartford, CT area.`
const description1 = `With our custom care, each job is tailored to you. Whether you want
to find a new, stylish, and protective look for your car, represent your company on an entire fleet of vehicles, 
or upgrade and personalize your storefront, we have you covered! Our professional and meticulous
work will ensure that no detail goes unnoticed, leaving you satisfied with a polished finish for years to come.
Call us now for a quote +1 (860) 573-9952.`;

const inter = Inter({ subsets: ["latin"], });
const rubikGemstones = Rubik_Gemstones({ subsets: ["latin"], weight: "400" });
const bungeeShade = Bungee_Shade({ subsets: ["latin"], weight: "400" });
const rubikGlitch = Rubik_Glitch({ subsets: ["latin"], weight: "400" });
const rubikGlitchPop = Rubik_Glitch_Pop({ subsets: ["latin"], weight: "400" });
const slabo = Slabo_27px({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <div>
      {/* Image ribbon */}
      <div
        className= "w-full h-80 bg-center bg-cover bg-no-repeat flex justify-center items-center"
        style={{ backgroundImage: "url('/wrapBackground.png')" }}
      >
        <h1 className={`text-white justify-center text-6xl md:text-9xl text-center ${rubikGlitch.className}`}>
          {title}
        </h1>

      </div>

      {/* White section below */}
      <div className="w-full bg-white py-20 px-6">
        {/* Flex container for two columns */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-20 max-w-6xl mx-auto">
          
          {/* Left column: Heading + description */}
          <div className={`md:w-1/2 text-left ${slabo.className}`}>
            <h2 className={`text-black text-2xl md:text-4xl font-bold mb-6`}>
              <strong>{heading1}</strong>
            </h2>
            <p className="text-lg md:text-xl">
              {description1}
            </p>
          </div>

          {/* Right column: Image */}
          <div className="md:w-1/2">
            <Image
              src="/Tints/TintedRed.JPEG"
              alt="TintedRed"
              width={300}
              height={300}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

        </div>
      </div>
    </div>
  );
}