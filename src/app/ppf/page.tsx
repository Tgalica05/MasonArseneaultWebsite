'use client'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from "next/image";
import {Rubik_Glitch, Slabo_27px } from "next/font/google";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { useRef, useState } from 'react';

const heading1 = "Paint Protection Films";
const description1 = `Keep your car looking good as new with our paint protection films.
We can do matte, satin, gloss, or colored films. Protect your car free of abrasians, chips, 
and pesky scratches while adding a sleek finish. Maintain your car's look and value over long
durations with our PPF solutions today. Contact us below to discuss how we can help you protect your vehicle!`

const rubikGlitch = Rubik_Glitch({ subsets: ["latin"], weight: "400" });
const slabo = Slabo_27px({ subsets: ["latin"], weight: "400" });

export default function wraps() {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const handlePlay = (index: number) => {
    if (playingIndex !== null && playingIndex !== index) {
      const currentVideo = videoRefs.current[playingIndex];
      if (currentVideo) currentVideo.pause();
    }
    setPlayingIndex(index);
    const video = videoRefs.current[index];
    if (video) video.play();
  };
  return (
    <div>
      <div className="w-full bg-white pt-10 px-6 pb-20 md:pb-30">

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
              src="/PPF/IMG_0909.JPEG"
              alt="PPF 1"
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