'use client'
import Image from "next/image";
import { Rubik_Glitch, Slabo_27px } from "next/font/google";

const title = "Relentless Wraps";
const subtitle = `Seamless wraps, tints, and paint protection films for your vehicles and businesses`;

const heading1 = `Transform and protect your vehicle`
const description1 = `Custom wraps, tints, and paint protection films tailored to your vision. Whether you're upgrading your personal ride or branding your business fleet, we deliver clean, high-quality results that last.`

const heading2 = `Meet the owner`
const description2 = `Hi! I'm Mason Arseneault, an experienced professional 
in the car wrapping and tinting industry. I take pride in every job and work closely with clients to ensure results that stand out. With a passion for cars and a strong attention to detail, I deliver high-quality finishes that speak for themselves.`

const rubikGlitch = Rubik_Glitch({ subsets: ["latin"], weight: "400" });
const slabo = Slabo_27px({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-black to-gray-100">

      {/* HERO */}
      <div
        className="w-full h-[70vh] bg-center bg-cover bg-no-repeat flex flex-col justify-center items-center text-center px-6"
        style={{ backgroundImage: "url('/wrapBackground.png')" }}
      >
        <div className="bg-black/60 p-6 rounded-2xl">
          <h1 className={`text-white text-5xl md:text-8xl ${rubikGlitch.className}`}>
            {title}
          </h1>

          <h2 className={`text-gray-200 text-lg md:text-2xl italic mt-4 ${slabo.className}`}>
            {subtitle}
          </h2>

        </div>
      </div>

      {/* SERVICES INTRO */}
      <section className="max-w-6xl mx-auto px-6 py-16 bg-white md:rounded-3xl -mt-10 shadow-xl">

        <div className="flex flex-col md:flex-row items-center gap-12">

          <div className={`md:w-1/2 ${slabo.className}`}>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight dark:text-black">
              {heading1}
            </h2>

            <div className="w-16 h-1 bg-black mb-6"></div>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              {description1}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {["Wraps", "Tints", "PPF"].map((item, i) => (
                <span
                  key={i}
                  className={`px-4 py-2 border border-black rounded-full text-lg ${slabo.className} dark:text-black`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="md:w-1/2">
            <Image
              src="/Wraps/MysteryVan.JPEG"
              alt="MysteryVan"
              width={500}
              height={500}
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>

        </div>
      </section>

      {/* OWNER SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-20">

        <div className="flex flex-col md:flex-row items-center gap-12">

          {/* IMAGES */}
          <div className="md:w-1/2">
            <div className="grid grid-cols-2 grid-rows-2 gap-3 aspect-square">

              <div className="col-span-2">
                <Image
                  src="/owner_img1.JPEG"
                  alt="Owner1"
                  width={800}
                  height={400}
                  className="w-full h-full object-cover rounded-2xl shadow-xl"
                />
              </div>

              <div>
                <Image
                  src="/owner_img2.JPEG"
                  alt="Owner2"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover rounded-2xl shadow-xl"
                />
              </div>

              <div>
                <Image
                  src="/owner_img3.JPEG"
                  alt="Owner3"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover rounded-2xl shadow-xl"
                />
              </div>

            </div>
          </div>

          {/* TEXT */}
          <div className={`md:w-1/2 ${slabo.className}`}>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center md:text-left dark:text-black">
              {heading2}
            </h2>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              {description2}
            </p>

            <div className="mt-8 space-y-3 text-lg md:text-xl dark:text-black">
              <p><strong>Phone:</strong> +1 (860) 573-9952</p>
              <p><strong>Email:</strong> relentlesswrapsct@gmail.com</p>
              <p><strong>Instagram:</strong> @relentlesswrapsct</p>
            </div>

          </div>

        </div>

      </section>

    </div>
  );
}