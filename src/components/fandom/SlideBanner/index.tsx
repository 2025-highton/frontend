import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

interface Props {
  children: any[];
}

export default function SlideBanner({ children }: Props) {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={30}
      centeredSlides={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {children.map((item) => (
        <SwiperSlide>{item}</SwiperSlide>
      ))}
    </Swiper>
  );
}
