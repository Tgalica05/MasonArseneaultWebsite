'use client'
import { Inter, Rubik_Gemstones, Bungee_Shade, Rubik_Glitch_Pop, Rubik_Glitch } from "next/font/google";

const title = "Relentless Wraps";
const description = `Put info here`;

const inter = Inter({ subsets: ["latin"], });
const rubikGemstones = Rubik_Gemstones({ subsets: ["latin"], weight: "400" });
const bungeeShade = Bungee_Shade({ subsets: ["latin"], weight: "400" });
const rubikGlitch = Rubik_Glitch({ subsets: ["latin"], weight: "400" });
const rubikGlitchPop = Rubik_Glitch_Pop({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <div>
      {/* Image ribbon */}
      <div
        className= "w-full h-70 bg-center bg-cover bg-no-repeat flex justify-center items-center"
        style={{ backgroundImage: "url('/wrapBackground.png')" }}
      >
        <h1 className={`text-white justify-center text-6xl md:text-9xl text-center ${rubikGlitchPop.className}`}>
          {title}
        </h1>
      </div>

      {/* White section below */}
      <div className="w-full bg-white py-20 px-6 text-center">
        <p className="max-w-3xl mb-20 mx-auto text-lg">
          {description}
        </p>
      </div>
    </div>
  );
}