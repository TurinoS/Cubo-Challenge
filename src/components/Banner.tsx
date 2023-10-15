import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/vue";
import slide1 from "../../public/banner-img-1.jpeg";
import slide2 from "../../public/banner-img-2.jpeg";
import slide3 from "../../public/banner-img-3.jpeg";
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from "next/image";

export default function Banner() {
    return(
        <section>
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                autoplay
                navigation
                pagination
            >
                <SwiperSlide><Image src={slide1} alt="Background image" width={1240} /></SwiperSlide>
                <SwiperSlide><Image src={slide2} alt="Background image" width={1240} /></SwiperSlide>
                <SwiperSlide><Image src={slide3} alt="Background image" width={1240} /></SwiperSlide>
            </Swiper>
        </section>
    )
}