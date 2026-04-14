'use client'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from "next/image";
import { Rubik_Glitch, Slabo_27px } from "next/font/google";
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
    <div className="bg-gradient-to-b from-white to-gray-100">

      {/* HERO SECTION */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-center gap-12">

          {/* TEXT */}
          <div className={`md:w-1/2 ${slabo.className}`}>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight dark:text-black">
              {heading1}
            </h2>

            <div className="w-16 h-1 bg-black mb-6"></div>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              {description1}
            </p>

          </div>

          {/* IMAGE */}
          <div className="md:w-1/2">
            <Image
              src="/Tints/TintedRed.JPEG"
              alt="TintedRed"
              width={500}
              height={500}
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* SERVICES */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">

        <p className={`text-3xl md:text-4xl font-bold mb-10 ${slabo.className} dark:text-black`}>
          Contact us today for
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {["Colored Tints", "Standard Window Tints", "Ceramic Tints", "Mirrored Tints"].map((item, i) => (
            <span
              key={i}
              className={`px-5 py-2 border border-black rounded-full text-lg md:text-xl ${slabo.className} dark:text-black`}
            >
              {item}
            </span>
          ))}
        </div>

        <p className={`text-2xl md:text-3xl font-semibold ${slabo.className} dark:text-black`}>
          Any shade, any color — we do it <span className="underline">ALL</span>
        </p>

        <p className="mt-2 text-gray-600">
          Check out some of our favorite tint work ↓
        </p>
      </section>

      {/* SWIPER */}
      <div className="max-w-6xl mx-auto px-4 pb-20">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
          centeredSlides={true}
          breakpoints={{
            768: {
              slidesPerView: 3,
              centeredSlides: false
            },
          }}
        >
          {media.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="group transition duration-300 hover:scale-105">

                {item.type === 'image' ? (
                  <img
                    src={item.src}
                    alt={`media-${index}`}
                    className="w-full h-auto object-cover rounded-2xl shadow-lg"
                  />
                ) : (
                  <div className="relative rounded-2xl overflow-hidden shadow-xl">

                    <video
                      src={item.src}
                      className="w-full h-auto object-cover"
                      ref={(el) => {
                        videoRefs.current[index] = el;
                        return;
                      }}
                      controls={playingIndex === index}
                      muted
                    />

                    {/* PLAY BUTTON */}
                    {playingIndex !== index && (
                      <button
                        onClick={() => handlePlay(index)}
                        className="absolute inset-0 flex items-center justify-center
                                   bg-black/30 group-hover:bg-black/50 transition"
                      >
                        <span className="text-white text-5xl">▶</span>
                      </button>
                    )}

                  </div>
                )}

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </div>
  );
}