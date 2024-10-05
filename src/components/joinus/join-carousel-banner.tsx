import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper/modules";
import { VITE_IMAGE_PATH_URL } from "../../react-query/constants";
import { ClBoxCard } from "../shared/cl-box-card";

interface Props {
  id: number;
  slogan: string;
  slogan_image: string;
}

interface DataProp {
  data: Props[];
}

const JoinCarouselBanner = ({ data }: DataProp) => {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={30}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      className="SvrclCard"
    >
      {data.map((item) => (
        <SwiperSlide
          key={item.id}
          style={{
            backgroundImage: `url('${VITE_IMAGE_PATH_URL}/sloganwithslider/${item.slogan_image}')`,
          }}
          className="rounded-md overflow-hidden bg-cover bg-center relative"
        >
          <div className="absolute inset-0 bg-black/55" />
          <ClBoxCard>{item.slogan}</ClBoxCard>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default JoinCarouselBanner;
