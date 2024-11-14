import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Container from "./container";
import ClientCard from "./client-card";
import HeadingPrimary from "../typography/heading-primary";
import { useFetchClients } from "../../react-query/hooks";

const Testimonials = () => {
  const { data, isError, isLoading } = useFetchClients();
  if (isError) {
    return <p>Oops something went wrong...</p>;
  }
  if (isLoading) {
    return <p>Loading...</p>;
  }
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
          {data.clients.map((client) => (
            <SwiperSlide key={client.id}>
              <ClientCard data={client} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Container>
  );
};

export default Testimonials;
