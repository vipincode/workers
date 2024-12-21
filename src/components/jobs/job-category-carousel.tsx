import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const JobCategoryCarousel = ({ data }: { data: string[] }) => {
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {data.map((item) => (
        <SwiperSlide key={item}>
          <div className="min-h-[160px] md:min-h-[300px] flex items-center justify-center bg-accent">
            <h3 className="text-base md:text-2xl font-medium">{item}</h3>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default JobCategoryCarousel;
