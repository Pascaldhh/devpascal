"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { RefObject, useCallback, useEffect, useRef } from "react";
import { SwiperRef } from "swiper/react";

interface SwiperButtonsProps {
  className?: string;
  swiperRef: RefObject<SwiperRef>;
}

export default function SwiperButtons({
  className,
  swiperRef,
}: SwiperButtonsProps) {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const changeButton = (
    btn: HTMLButtonElement,
    status: "enabled" | "disabled",
  ) => (btn.disabled = status === "disabled");

  const checkStartEndSlide = useCallback(() => {
    const prev = prevRef.current;
    const next = nextRef.current;
    const swiper = swiperRef.current?.swiper;
    console.log("???");
    if (!swiper || !prev || !next) return;
    console.log(swiper);

    [prev, next].forEach((btn) => changeButton(btn, "enabled"));
    if (swiper.isBeginning) changeButton(prev, "disabled");
    else if (swiper.isEnd) changeButton(next, "disabled");
  }, [prevRef, nextRef, swiperRef]);

  const slide = (direction: "prev" | "next") => {
    const swiper = swiperRef.current?.swiper;
    if (!swiper) return;

    switch (direction) {
      case "next":
        swiper.slideNext();
        break;
      case "prev":
        swiper.slidePrev();
        break;
    }
  };

  useEffect(() => {
    checkStartEndSlide();
    swiperRef.current?.swiper.on("fromEdge", () => checkStartEndSlide());
    swiperRef.current?.swiper.on("toEdge", () => checkStartEndSlide());
  }, [checkStartEndSlide, swiperRef]);

  return (
    <div className={className}>
      <div className="container flex justify-between text-grey-300">
        <button
          ref={prevRef}
          onClick={() => slide("prev")}
          className="select-none transition-colors duration-200 hover:text-grey-200 disabled:text-grey-100 disabled:hover:text-grey-100"
        >
          <FontAwesomeIcon icon={faArrowLeft} /> prev
        </button>
        <button
          ref={nextRef}
          onClick={() => slide("next")}
          className="select-none transition-colors duration-200 hover:text-grey-200 disabled:text-grey-100 disabled:hover:text-grey-100"
        >
          next <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
}
