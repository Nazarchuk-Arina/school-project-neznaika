import s from "./Hero.module.css";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import sprite from "./../../assets/images/sprite.svg";
import clsx from "clsx";

const Hero = () => {
  return (
    <div className="container">
      <div className={s.header__wrapper}>
        <div className={s.h1__stars}>
          <h1>Незнайка на луне</h1>
        </div>

        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className={s.swiper__slide}
        >
          <SwiperSlide className={s.swiper}>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
