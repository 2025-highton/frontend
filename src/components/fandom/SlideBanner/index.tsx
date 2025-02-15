import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import s from "./style.module.scss";
import Plus from "@/components/icon/plus";
import { CSSProperties } from "react";

interface ImageItem {
  iamgeUrl: string;
  redirectUrl: string;
  title?: string;
}

interface Props {
  images: ImageItem[];
  style?: CSSProperties;
}

export default function CenteredAutoSwiper({ images }: Props) {
  return (
    <Swiper
      className={s.container}
      slidesPerView={"auto"} // 이미지 크기에 맞춰 자동 조절
      centeredSlides={true} // 중앙 정렬
      spaceBetween={30} // 슬라이드 간격 조정
      loop={true} // 무한 루프 활성화
      pagination={{ clickable: true }}
      modules={[Pagination]}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index} className={s.slide}>
          <a
            href={image.redirectUrl}
            className={s.autobannerImage}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={image.iamgeUrl} alt={`slide-${index}`} />
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export function CircleBanner({ images, style }: Props) {
  return (
    <Swiper
      className={s.container}
      slidesPerView={"auto"} // 이미지 크기에 맞춰 자동 조절
      centeredSlides={false} // 중앙 정렬
      spaceBetween={30} // 슬라이드 간격 조정
      pagination={{ clickable: true }}
      style={style}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index} className={s.slide}>
          <a
            href={image.redirectUrl}
            className={s.circleBannerImage}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={image.iamgeUrl} alt={`slide-${index}`} />
            <span>{image.title}</span>
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export function HotSlideBanner({ images }: Props) {
  return (
    <Swiper
      className={s.container}
      slidesPerView={"auto"} // 이미지 크기에 맞춰 자동 조절
      centeredSlides={false} // 중앙 정렬
      spaceBetween={20} // 슬라이드 간격 조정
      pagination={{ clickable: true }}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index} className={s.slide}>
          <a
            href={image.redirectUrl}
            className={s.hotBannerImage}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={image.iamgeUrl} alt={`slide-${index}`} />
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export function InnerCircleBanner({ images }: Props) {
  return (
    <Swiper
      className={s.container}
      slidesPerView={"auto"} // 이미지 크기에 맞춰 자동 조절
      centeredSlides={false} // 중앙 정렬
      spaceBetween={20} // 슬라이드 간격 조정
      pagination={{ clickable: true }}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index} className={s.slide}>
          <a
            href={image.redirectUrl}
            className={s.innerCircleBannerImage}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={image.iamgeUrl} alt={`slide-${index}`} />
          </a>
        </SwiperSlide>
      ))}
      <SwiperSlide className={s.slide}>
        <a
          href={""}
          className={s.innerCircleBannerImage}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Plus />
        </a>
      </SwiperSlide>
    </Swiper>
  );
}
