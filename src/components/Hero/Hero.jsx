import s from "./Hero.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import rocketaTel from "./../../assets/images/Slider/hero-tel-1-min.png";
import rocketaTab from "./../../assets/images/Slider/hero-tab-1-min.png";
import rocketaDesc from "./../../assets/images/Slider/hero-desc-1-min.png";

const Hero = () => {
  return (
    <div className="container">
      <div className={s.hero__inner}>
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
          <SwiperSlide className={s.swiper}>
            <img
              src={rocketaTel}
              srcSet={`${rocketaTel} 360w, ${rocketaTab} 768w, ${rocketaDesc} 1280w`}
              sizes="(max-width: 360px) 100vw, (max-width: 768px) 50vw, (min-width: 1280px) 33vw"
              alt="photo of rocket"
            />
          </SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
