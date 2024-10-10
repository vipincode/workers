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
          <div className="min-h-[300px] flex items-center justify-center bg-gray-200">
            <h3 className="text-2xl font-medium">{item}</h3>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default JobCategoryCarousel;
