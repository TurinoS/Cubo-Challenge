"use client";

import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import slide1 from "../../public/banner-img-1.jpeg";
import slide2 from "../../public/banner-img-2.jpeg";
import slide3 from "../../public/banner-img-3.jpeg";
import Image from "next/image";

export default function Banner() {
  return (
    <section>
      <Swiper
        className="relative"
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 8000 }}
        navigation={{ enabled: true }}
        pagination={{ clickable: true }}
        loop
      >
        <SwiperSlide>
          <Image src={slide1} alt="Background image" width={1240} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={slide3} alt="Background image" width={1240} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={slide2} alt="Background image" width={1240} />
        </SwiperSlide>
      </Swiper>
      <div className="bg-[var(--orange)] absolute top-[125px] left-[150px] z-20 p-4 w-[350px] text-[var(--white)]">
        <h2 className="uppercase font-bold text-xl mb-2">lorem ipsum dolor</h2>
        <p>
          Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique
          senectus et netus et malesuada fames ac turpis.
        </p>
      </div>
    </section>
  );
}
