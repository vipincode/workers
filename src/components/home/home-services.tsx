import VCard from "../shared/v-card";
import HeadingPrimary from "../typography/heading-primary";
import ServiceCardCarousel from "./service-card-carousel";

const HomeServices = () => {
  return (
    <>
      <div className="text-center">
        <HeadingPrimary className="mb-6 mt-6">Our Services</HeadingPrimary>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <VCard key={item} />
        ))}
      </div>
      <div className="mt-[100px] pb-[100px]">
        <div>
          <HeadingPrimary className="text-center mb-10">Instant Services</HeadingPrimary>
          <ServiceCardCarousel />
        </div>
      </div>
    </>
  );
};

export default HomeServices;
