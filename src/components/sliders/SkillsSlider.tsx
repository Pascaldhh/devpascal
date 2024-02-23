"use client";

import Slider from "react-slick"
import { PropsWithChildren } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface SkillsSliderProps extends PropsWithChildren{
  className?: string;
}
export default function SkillsSlider({ className, children } : SkillsSliderProps ) {
  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    swipeToSlide: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false
  };
  return (
    <Slider {...settings} className={`${className} flex gap-2`}>
      {children}
    </Slider>
  );
}