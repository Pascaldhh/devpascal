"use client";
import { PropsWithChildren, Children } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/autoplay";

interface SkillsSliderProps extends PropsWithChildren {
  className?: string;
}
export default function SkillsSlider({
  className,
  children,
}: SkillsSliderProps) {
  SwiperCore.use([Autoplay]);
  const style = `.swiper-wrapper { padding: 20px 0; width: fit-content; }`;
  return (
    <>
      <style>{style}</style>
      <Swiper
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={1000}
        slidesPerView="auto"
        grabCursor={true}
        centeredSlides={true}
        centeredSlidesBounds={true}
        className={className}
      >
        {[...Array(2)].map((_, i) =>
          Children.map(Children.toArray(children), (child, i) => (
            <SwiperSlide className="ml-3 mr-3 !w-fit">{child}</SwiperSlide>
          )),
        )}
      </Swiper>
    </>
  );
}
