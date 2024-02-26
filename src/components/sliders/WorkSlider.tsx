"use client";
import { PropsWithChildren, Children, useRef, useState } from "react";

import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperButtons from "@/components/sliders/SwiperButtons";
import type { Swiper as SwiperClass } from "swiper/types";

interface WorkSliderProps extends PropsWithChildren {
  className?: string;
}
export type actionEdgeFunc = (name: SwiperClass) => void;

export default function WorkSlider({ className, children }: WorkSliderProps) {
  const swiperRef = useRef<SwiperRef>(null);
  const style = `.swiper-wrapper { padding: 20px 0; width: fit-content; }`;

  return (
    <div className={className}>
      <style>{style}</style>
      <SwiperButtons swiperRef={swiperRef} className="block lg:hidden" />
      <Swiper
        ref={swiperRef}
        speed={1000}
        slidesPerView="auto"
        initialSlide={0}
        centeredSlides={false}
        centeredSlidesBounds={true}
        onInit={(swiper) => {
          swiper.params.centeredSlides = true;
          swiper.updateSlides();
        }}
      >
        {Children.map(Children.toArray(children), (child, i) => (
          <SwiperSlide className="ml-5 mr-5 !w-fit">{child}</SwiperSlide>
        ))}
      </Swiper>
      <SwiperButtons swiperRef={swiperRef} className="hidden lg:block" />
    </div>
  );
}
