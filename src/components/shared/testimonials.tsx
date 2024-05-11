import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Container from "./container";
import ClientCard from "./client-card";
import HeadingPrimary from "../typography/heading-primary";

const Testimonials = () => {
  return (
    <Container className="my-[200px]">
      <HeadingPrimary className="text-center mb-[50px]">What our client says</HeadingPrimary>
      <div className="max-w-[500px] mx-auto">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="testimonialsCarousel"
        >
          <SwiperSlide>
            <ClientCard />
          </SwiperSlide>
          <SwiperSlide>
            <ClientCard />
          </SwiperSlide>
          <SwiperSlide>
            <ClientCard />
          </SwiperSlide>
          <SwiperSlide>
            <ClientCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </Container>
  );
};

export default Testimonials;
