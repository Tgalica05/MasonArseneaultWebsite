'use client'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from "next/image";
import { Rubik_Glitch, Slabo_27px } from "next/font/google";
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
const description2 = `By professionals, for professionals. Our commercial wrapping services are designed to help 
your business stand out on the road. We can wrap anything from your company truck
to an entire fleet of vehicles, or even your storefront. From vibrant colors to 
custom logos, we offer a range of options to suit your business needs. 
Elevate your marketing strategy with our professional wrapping solutions 
that combine creativity and durability seamlessly. Contact us today to 
discuss how we can help your business make a lasting impression!` 

const media = [
  { type: 'video', src: '/Wraps/Vids/Boxtruck2.mp4' },
  { type: 'video', src: '/Wraps/Vids/CoverPhotoVid.mp4' },
  { type: 'image', src: '/Wraps/MysteryVan.JPEG' },
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
  { type: 'image', src: '/Wraps/WrappedWall.JPEG' },
  { type: 'video', src: '/Wraps/Vids/BlueCarWrap.mp4' }
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
    <div className="bg-gradient-to-b from-white to-gray-100">

      {/* PERSONAL WRAPS */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-center gap-12">

          <div className={`md:w-1/2 ${slabo.className}`}>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight dark:text-black">
              {heading1}
            </h2>

            <div className="w-16 h-1 bg-black mb-6"></div>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              {description1}
            </p>

          </div>

          <div className="md:w-1/2">
            <Image
              src="/Wraps/beigeCar.JPEG"
              alt="Beige Car"
              width={500}
              height={500}
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>

        </div>
      </section>

      {/* BUSINESS WRAPS */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-center gap-12">

          <div className="md:w-1/2 order-2 md:order-1">
            <Image
              src="/Wraps/FoodTruck.JPEG"
              alt="Food Truck"
              width={500}
              height={500}
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>

          <div className={`md:w-1/2 order-1 md:order-2 ${slabo.className}`}>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-left dark:text-black">
              {heading2}
            </h2>

            <div className="w-16 h-1 bg-black mb-6 ml-0"></div>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-left">
              {description2}
            </p>
          </div>

        </div>
      </section>

      {/* PORTFOLIO HEADER */}
      <section className="text-center px-6 pb-10">
        <h3 className={`text-3xl md:text-4xl font-bold ${slabo.className} dark:text-black`}>
          Our Wrap Portfolio
        </h3>
        <p className="text-gray-600 mt-2">
          Real projects. Real results.
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
              slidesPerView: 2,
              centeredSlides: false
            },
          }}
        >
          {media.map((item, index) => (
            <SwiperSlide key={index} className='bg-transparent'>
              <div className="group transition duration-300 hover:scale-105 flex items-center justify-center">

                {item.type === 'image' ? (
                  <img
                    src={item.src}
                    alt={`media-${index}`}
                    className="max-h-[500px] w-auto object-contain rounded-2xl shadow-lg mx-auto"
                  />
                ) : (
                  <div className="relative flex items-center justify-center w-full bg-transparent">

                    <video
                      src={item.src}
                      className="max-h-[500px] w-auto object-contain rounded-2xl shadow-xl mx-auto bg-transparent"
                      ref={(el) => {
                        videoRefs.current[index] = el;
                        return;
                      }}
                      controls={playingIndex === index}
                      muted
                      style={{ backgroundColor: 'transparent' }}
                    />

                    {playingIndex !== index && (
                      <button
                        onClick={() => handlePlay(index)}
                        className="absolute inset-0 flex items-center justify-center
                                  bg-black/20 group-hover:bg-black/40 transition rounded-2xl"
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