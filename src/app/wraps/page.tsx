'use client'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from "next/image";
import {Rubik_Glitch, Slabo_27px } from "next/font/google";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { useRef, useState } from 'react';

const heading1 = "Wrapping Services for YOU";
const description1 = `Experience our personal wrapping services
designed to help you customize your vehicle to your unique style. 
Whether you want to transform your car with a vibrant color, add a 
sleek matte finish, or protect your paint with a clear wrap, we 
have you covered. Elevate your ride with our professional 
wrapping solutions. Contact us today to discuss how we can
turn your vision into reality!`
const heading2 = `Wrapping Services for your BUSINESS`;
const description2 = `Our commercial wrapping services are designed to help 
your business stand out on the road. We can wrap anything from your company truck
to an entire fleet of vehicles, or even your storefront. From vibrant colors to 
custom logos, we offer a range of options to suit your business needs. 
Elevate your marketing strategy with our professional wrapping solutions 
that combine creativity and durability seamlessly. Contact us today to 
discuss how we can help your business make a lasting impression!` 

const media = [
  { type: 'video', src: '/Wraps/Vids/Boxtruck2.mp4' },
  { type: 'image', src: '/Wraps/SandalsCar.JPEG' },
  { type: 'video', src: '/Wraps/Vids/Counterwrap2.mp4' },
  { type: 'image', src: '/Wraps/Boat1.JPEG' },
  { type: 'image', src: '/Wraps/Boat2.JPEG' },
  { type: 'image', src: '/Wraps/DogWrap.JPEG' },
  { type: 'video', src: '/Wraps/Vids/Blacksuv2.mp4' },
  { type: 'video', src: '/Wraps/Vids/Dewolfe2.mp4' },
  { type: 'video', src: '/Wraps/Vids/Acevan2.mp4' },
  { type: 'video', src: '/Wraps/Vids/Adam2.mp4' },
  { type: 'video', src: '/Wraps/Vids/Grandcherokee2.mp4' },
  { type: 'video', src: '/Wraps/Vids/Tmbuilds2.mp4' },
  { type: 'video', src: '/Wraps/Vids/Windowwrap2.mp4' },
  { type: 'video', src: '/Wraps/Vids/Windowwrld2.mp4' },
  { type: 'image', src: '/Wraps/WrappedWall.JPEG' }
];

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
              src="/Wraps/beigeCar.JPEG"
              alt="Beige Car"
              width={300}
              height={300}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* 2nd flex container w/ two columns */}
        <div className="flex flex-col md:flex-row items-center py-10 md:py-20 gap-10 md:gap-20 max-w-6xl mx-auto">

          {/* Right column: container to hold image */}
          <div className="md:w-1/2 order-2 md:order-1">
            <Image
              src="/Wraps/FoodTruck.JPEG"
              alt="Food Truck"
              width={300}
              height={300}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Left column: Heading + description */}
          <div className={`md:w-1/2 text-left order-1 md:order-2 ${slabo.className}`}>
            <h2 className={`text-black text-2xl md:text-4xl text-center font-bold mb-6`}>
              {heading2}
            </h2>
            <p className="text-lg text-left md:text-2xl dark:text-black">
              {description2}
            </p>
          </div>

        </div>
      </div>
      <section className="max-w-6xl mx-auto py-10 md:py-20 text-center bg-white text-black dark:bg-white dark:text-black">
          <p className={`text-2xl md:text-4xl font-bold mb-8 ${slabo.className}`}>
            <strong>Check out our diverse wrapping portfolio below:</strong>
          </p>
      </section>


      <div className="w-full bg-white max-w-5xl mx-auto pb-10">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={10}
        slidesPerView={1}
        centeredSlides={true}
        className="h-96"
        
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
            centeredSlides: false
          },
        }}
      >
        {media.map((item, index) => (
          <SwiperSlide key={index} className="flex items-center justify-center">
          {item.type === 'image' ? (
            <img
              src={item.src}
              alt={`media-${index}`}
              className="w-full h-full object-cover rounded-xl"
            />
          ) : (
            <div className="relative w-full h-full rounded-xl overflow-hidden flex items-center justify-center">
              <video
                src={item.src}
                className="max-h-full max-w-full rounded-xl"
                ref={(el) => {
                  videoRefs.current[index] = el;
                  return;
                }}                
                controls
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