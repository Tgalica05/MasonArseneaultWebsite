'use client'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from "next/image";
import {Rubik_Glitch, Slabo_27px } from "next/font/google";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { useRef, useState } from 'react';


const heading1 = "Customizable Tinting Services";
const description1 = `Experience the ultimate in style and privacy with
 our premium tinting services. We invest in high-quality 
 materials to enhance your vehicle's appearance while providing UV protection 
 and reducing glare. Whether you want a sleek, dark tint or a subtle shade, 
 we offer a range of options to suit your preferences. Elevate your driving 
 experience with our professional tinting solutions that combine aesthetics 
 and functionality seamlessly. Contact us today to schedule your appointment 
 and give your vehicle the upgrade it deserves!`
const media = [
  { type: 'video', src: '/Tints/Copy 061E92f2-4C90-4145-A9a9-126Da1829218.mp4' },
  { type: 'video', src: '/Tints/Img 08032.mp4' },
  { type: 'video', src: '/Tints/Img 08102.mp4' },
  { type: 'video', src: '/Tints/Img 08112.mp4' },
  { type: 'video', src: '/Tints/Img 09122.mp4' },
  { type: 'video', src: '/Tints/vid2.mp4' }
];

const rubikGlitch = Rubik_Glitch({ subsets: ["latin"], weight: "400" });
const slabo = Slabo_27px({ subsets: ["latin"], weight: "400" });

export default function tints() {
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
              src="/Tints/TintedRed.JPEG"
              alt="TintedRed"
              width={300}
              height={300}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Services section */}
        <section className="max-w-6xl mx-auto py-10 md:py-20 text-center text-black dark:text-black">
          <p className={`text-4xl font-bold mb-8 ${slabo.className}`}>
            <strong>Contact us today for</strong>
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-10 mb-8">
            <span className={`text-2xl md:text-3xl italic ${slabo.className}`}>Colored Tints</span>
            <span className="hidden md:inline-block text-3xl md:text-5xl mx-2">•</span>
            <span className={`text-2xl md:text-3xl italic ${slabo.className}`}>Standard Window Tints</span>
            <span className="hidden md:inline-block text-3xl md:text-5xl mx-2">•</span>
            <span className={`text-2xl md:text-3xl italic ${slabo.className}`}>Ceramic Tints</span>
            <span className="hidden md:inline-block text-3xl md:text-5xl mx-2">•</span>
            <span className={`text-2xl md:text-3xl italic ${slabo.className}`}>Mirrored Tints</span>
          </div>

          <p className={`text-4xl md:text-4xl font-bold ${slabo.className}`}>
            Any shade, any color we do it <strong className="font-bold underline">ALL</strong>! Check out some of our favorite tint work:
          </p>
        </section>
      </div>
      <div className="w-full bg-white max-w-5xl mx-auto pb-10">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={10}
        slidesPerView={1}
        centeredSlides={true}
        breakpoints={{
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
            centeredSlides: false
          },
        }}
      >
        {media.map((item, index) => (
          <SwiperSlide key={index}>
          {item.type === 'image' ? (
            <img
              src={item.src}
              alt={`media-${index}`}
              className="w-full h-auto object-cover rounded-xl"
            />
          ) : (
            <div className="relative w-full h-auto rounded-xl overflow-hidden">
              <video
                src={item.src}
                className="w-2/3 h-auto object-cover rounded-xl mx-auto"
                ref={(el) => {
                  videoRefs.current[index] = el;
                  return;
                }}                
                controls={playingIndex === index}
                muted
              />
              {playingIndex !== index && (
                <button
                  onClick={() => handlePlay(index)}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                            bg-black bg-opacity-50 text-white p-4 rounded-full text-3xl"
                >
                  ▶
                </button>
              )}
            </div>
          )}
        </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </div>
  );
}