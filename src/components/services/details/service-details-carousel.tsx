import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { VITE_IMAGE_PATH_URL } from "../../../react-query/constants";
import { Slogan } from "../../../types";

interface ServiceDetailsCarouselProps {
  data: Slogan[];
}

const ServiceDetailsCarousel = ({ data }: ServiceDetailsCarouselProps) => {
  return (
    <Swiper navigation={true} modules={[Navigation]} className="serviceDetailCarousel">
      {data.map((item) => (
        <SwiperSlide
          className="!bg-green-500 bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: `url(${VITE_IMAGE_PATH_URL}/sloganwithslider/${item.slogan_image})` }}
        >
          {item.slogan}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceDetailsCarousel;
