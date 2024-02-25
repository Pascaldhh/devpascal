"use client";
import {PropsWithChildren, Children, useRef, useEffect, useCallback} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import {Swiper, SwiperRef, SwiperSlide} from 'swiper/react';
import 'swiper/css';
interface WorkSliderProps extends PropsWithChildren {
  className?: string;
}
export default function WorkSlider({ className, children } : WorkSliderProps ) {
  const swiperRef = useRef<SwiperRef>(null);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  
  const style = `.swiper-wrapper { padding: 20px 0; width: fit-content; }`
  const btnDisabledColor = "text-grey-100";
  
  const changeButton = (btn : HTMLButtonElement, status : "enabled" | "disabled") => {
    btn.classList.toggle(btnDisabledColor, status === "disabled");
    btn.disabled = status === "disabled";
  }
  
  const checkStartEndSlide = useCallback(() => {
    const prev = prevRef.current;
    const next = nextRef.current;
    const swiper = swiperRef.current?.swiper;
    if (!swiper || !prev || !next) return;
    
    if (swiper.activeIndex === 0) changeButton(prev, "disabled");
    else if (swiper.activeIndex === swiper.slides.length-1) changeButton(next, "disabled");
    else [prev, next].forEach(btn => changeButton(btn, "enabled")) 
  }, [prevRef, nextRef, swiperRef]);
  
  const slide = (direction : "prev" | "next") => {
    const swiper = swiperRef.current?.swiper;
    if (!swiper) return;
    
    switch(direction) {
      case "next": swiper.slideNext(); break;
      case "prev": swiper.slidePrev(); break;
    }
  }
  
  useEffect(() => checkStartEndSlide(), [checkStartEndSlide]);
  
  return (
    <div className={className}>
      <style>{style}</style>
      <div className="flex justify-between container text-grey-300">
        <button ref={prevRef} onClick={() => slide("prev")} className="transition-colors duration-200"><FontAwesomeIcon icon={faArrowLeft}/> prev</button>
        <button ref={nextRef} onClick={() => slide("next")} className="transition-colors duration-200">next <FontAwesomeIcon icon={faArrowRight}/></button>
      </div>
      <Swiper
        ref={swiperRef}
        speed={1000}
        slidesPerView="auto"
        centeredSlides={true}
        centeredSlidesBounds={true}
        onSlideChange={checkStartEndSlide} 
      >
        {Children.map(Children.toArray(children), (child, i) =>
          <SwiperSlide className="!w-fit ml-5 mr-5">{child}</SwiperSlide>
        )}
      </Swiper>
    </div>
  );
}