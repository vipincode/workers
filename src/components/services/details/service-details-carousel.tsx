import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { VITE_IMAGE_PATH_URL } from "../../../react-query/constants";

const ServiceDetailsCarousel = ({ bgImage }: { bgImage: string }) => {
  return (
    <Swiper navigation={true} modules={[Navigation]} className="serviceDetailCarousel">
      <SwiperSlide
        className="!bg-green-500 bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url(${VITE_IMAGE_PATH_URL}/service/${bgImage})` }}
      >
        Slider Content
      </SwiperSlide>
      <SwiperSlide
        className="!bg-red-500 bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url(${VITE_IMAGE_PATH_URL}/service/${bgImage})` }}
      >
        Slider Content
      </SwiperSlide>
      <SwiperSlide
        className="!bg-blue-500 bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url(${VITE_IMAGE_PATH_URL}/service/${bgImage})` }}
      >
        Slider Content
      </SwiperSlide>
      <SwiperSlide
        className="!bg-teal-500 bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url(${VITE_IMAGE_PATH_URL}/service/${bgImage})` }}
      >
        Slider Content
      </SwiperSlide>
      <SwiperSlide
        className="!bg-yellow-500 bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url(${VITE_IMAGE_PATH_URL}/service/${bgImage})` }}
      >
        Slider Content
      </SwiperSlide>
    </Swiper>
  );
};

export default ServiceDetailsCarousel;
