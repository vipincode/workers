import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const ServiceDetailsCarousel = () => {
  return (
    <Swiper navigation={true} modules={[Navigation]} className="serviceDetailCarousel">
      <SwiperSlide className="!bg-green-500">Slider Content</SwiperSlide>
      <SwiperSlide className="!bg-red-500">Slider Content</SwiperSlide>
      <SwiperSlide className="!bg-blue-500">Slider Content</SwiperSlide>
      <SwiperSlide className="!bg-teal-500">Slider Content</SwiperSlide>
      <SwiperSlide className="!bg-yellow-500">Slider Content</SwiperSlide>
    </Swiper>
  );
};

export default ServiceDetailsCarousel;
