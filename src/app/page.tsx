'use client'
import Image from "next/image";
import {Rubik_Glitch, Slabo_27px } from "next/font/google";

const title = "Relentless Wraps";
const heading1 = `Transform and protect your vehicle with custom wraps, tints, 
and PPF brought to you from the greater Hartford, CT area.`
const description1 = `With our custom care, each job is tailored to you. Whether you want
to find a new, stylish, and protective look for your car, represent your company on an entire fleet of vehicles, 
or upgrade and personalize your storefront, we have you covered! Our professional and meticulous
work will ensure that no detail goes unnoticed, leaving you satisfied with a polished finish for years to come. Our
belief is that nobody is too old to play with stickers.`;
const heading2 = `Meet the owner`
const description2 = `Hi! I'm Mason Arseneault, an experienced professional 
in the car wrapping and tinting industry. I take great pride in all of my jobs, and work to the best
of my abilities to ensure that my customers are satisfied with your final products. I have a passion for cars and a keen eye for detail which allows
 me to provide high-quality services to help your vehicles and companies shine. I can guarantee you exceptional
customer service, while also tending to all of your wrapping, tinting, & paint protection
 needs with immense care. Feel free to contact me for a quote or check out my work via social media!`

const rubikGlitch = Rubik_Glitch({ subsets: ["latin"], weight: "400" });
const slabo = Slabo_27px({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <div>
      {/* Image ribbon */}
      <div
        className="w-full h-80 bg-center bg-cover bg-no-repeat flex justify-center items-center"
        style={{ backgroundImage: "url('/wrapBackground.png')" }}
      >
        <h1 className={`text-white justify-center text-6xl md:text-9xl text-center ${rubikGlitch.className}`}>
          {title}
        </h1>
      </div>

      {/* White section below */}
      <div className="w-full bg-white pt-10 px-6">

        {/* First flex container w/ two columns */}
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20 max-w-6xl mx-auto my-auto">
          {/* Left column: Heading + description */}
          <div className={`md:w-1/2 ${slabo.className}`}>
            <h2 className={`text-black text-2xl md:text-4xl text-center font-bold mb-6`}>
              {heading1}
            </h2>
            <p className="text-lg text-left md:text-2xl dark:text-black">
              {description1}
            </p>
          </div>

          {/* Right column: container to hold image */}
          <div className="md:w-1/2">
            <Image
              src="/Wraps/MysteryVan.JPEG"
              alt="MysteryVan"
              width={300}
              height={300}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Second flex container w/ two columns */}
        <div className="flex flex-col md:flex-row items-center py-10 md:py-20 gap-10 md:gap-20 max-w-6xl mx-auto">

          {/* Image column */}
          <div className="md:w-1/2 order-2 md:order-1">
            <div className="grid grid-cols-2 grid-rows-2 gap-2 aspect-square">

              {/* Top image */}
              <div className="col-span-2">
                <Image
                  src="/owner_img1.JPEG"
                  alt="Owner1"
                  width={800}
                  height={400}
                  className="w-full h-full object-cover shadow-lg rounded-lg"
                />
              </div>

              {/* Bottom left */}
              <div>
                <Image
                  src="/owner_img2.JPEG"
                  alt="Owner2"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>

              {/* Bottom right */}
              <div>
                <Image
                  src="/owner_img3.JPEG"
                  alt="Owner3"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>

            </div>
          </div>

          {/* Text column */}
          <div className={`md:w-1/2 text-left order-1 md:order-2 ${slabo.className}`}>
            <h2 className="text-black text-2xl md:text-4xl font-bold mb-6 text-center">
              {heading2}
            </h2>

            <p className="text-lg md:text-2xl dark:text-black">
              {description2}
            </p>

            <p className="text-lg md:text-2xl mt-5 text-center dark:text-black">
              <strong>Phone:</strong> +1 (860) 573-9952
            </p>

            <p className="text-lg md:text-2xl mt-5 text-center dark:text-black">
              <strong>Email:</strong> relentlesswrapsct@gmail.com
            </p>

            <p className="text-lg md:text-2xl mt-5 text-center dark:text-black">
              <strong>Social Media Tag:</strong> @relentlesswrapsct
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}