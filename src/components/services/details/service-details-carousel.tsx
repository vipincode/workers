import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { VITE_IMAGE_PATH_URL } from "../../../react-query/constants";

const ServiceDetailsCarousel = ({ data }) => {
  return (
    <Swiper navigation={true} modules={[Navigation]} className="serviceDetailCarousel">
      {data.map((item: string) => (
        <SwiperSlide
          key={item}
          className="!bg-gray-200 bg-no-repeat bg-cover bg-center h-[350px]"
          style={{
            backgroundImage: `url(${VITE_IMAGE_PATH_URL}/service/${encodeURIComponent(item)})`,
          }}
        />
      ))}
    </Swiper>
  );
};

export default ServiceDetailsCarousel;
