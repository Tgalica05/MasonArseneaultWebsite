'use client'
import Image from "next/image";
import { Rubik_Glitch, Slabo_27px } from "next/font/google";

const heading1 = "Paint Protection Films";
const description1 = `Keep your car looking good as new with our paint protection films.
We can do matte, satin, gloss, or colored films. Protect your car from abrasions, chips, 
and scratches while adding a sleek finish. Maintain your car's look and value over time 
with our professional PPF solutions.`

const rubikGlitch = Rubik_Glitch({ subsets: ["latin"], weight: "400" });
const slabo = Slabo_27px({ subsets: ["latin"], weight: "400" });

export default function wraps() {
  return (
    <div className="bg-gradient-to-b from-white to-gray-100">

      {/* HERO SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-center gap-12">

          {/* LEFT IMAGE */}
          <div className="md:w-1/2 order-2 md:order-1">
            <Image
              src="/PPF/RedCar.jpg"
              alt="PPF Red Car"
              width={500}
              height={500}
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>

          {/* TEXT */}
          <div className={`md:w-1/2 order-1 md:order-2 ${slabo.className}`}>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight dark:text-black">
              {heading1}
            </h2>

            <div className="w-16 h-1 bg-black mb-6"></div>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              {description1}
            </p>

          </div>

        </div>
      </section>

      {/* FEATURES / BENEFITS */}
      <section className="max-w-6xl mx-auto px-6 py-10 text-center">
        <h3 className={`text-3xl md:text-4xl font-bold mb-10 ${slabo.className} dark:text-black`}>
          Why Choose PPF?
        </h3>

        <div className="flex flex-wrap justify-center gap-4">
          {[
            "Scratch Resistance",
            "Rock Chip Protection",
            "UV Protection",
            "Gloss / Matte Options",
            "Preserves Resale Value"
          ].map((item, i) => (
            <span
              key={i}
              className={`px-5 py-2 border border-black rounded-full text-lg md:text-xl dark:text-black ${slabo.className}`}
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* SECOND IMAGE (DETAIL / CLOSEUP FEEL) */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="flex justify-center">
          <Image
            src="/PPF/IMG_0909.JPEG"
            alt="PPF Detail"
            width={800}
            height={500}
            className="w-full h-auto rounded-2xl shadow-2xl"
          />
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="text-center px-6 pb-20">
        <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${slabo.className} dark:text-black`}>
          Ready to protect your investment?
        </h3>

        <p className="text-gray-600 mb-6">
          Get in touch today and we’ll help you choose the perfect protection package.
        </p>

      </section>

    </div>
  );
}