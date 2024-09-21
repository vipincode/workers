import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper/modules";
import { ClBoxCard } from "./cl-box-card";

interface Props {
  id: number;
  title: string;
}

interface DataProp {
  data: Props[];
}

const ServicesCarouselCard = ({ data }: DataProp) => {
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
        <SwiperSlide>
          <ClBoxCard key={item.id}>{item.title}</ClBoxCard>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServicesCarouselCard;
