import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';

const SimpleSwiper = () => {
  return (
    <Swiper
      spaceBetween={10}
      modules={[Pagination]}
      pagination={{ clickable: true }}
      className="h-[280px] sm:h-[480px] relative"
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
    </Swiper>
  );
};

export default SimpleSwiper;