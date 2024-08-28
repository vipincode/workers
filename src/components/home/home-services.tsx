import { useServices } from "../../react-query/hooks";
import ServicesCard from "../shared/services-card";
import HeadingPrimary from "../typography/heading-primary";
import ServicesLoading from "./loader/services-loading";
import ServiceCardCarousel from "./service-card-carousel";

const HomeServices = () => {
  const { data, error, isLoading, isError } = useServices();

  if (isLoading) {
    return <ServicesLoading />;
  }

  if (isError) {
    return <p>Error{error.message}</p>;
  }

  //Get the data
  const { services } = data;

  return (
    <>
      <div className="text-center">
        <HeadingPrimary className="mb-6 mt-6">Our Services</HeadingPrimary>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {services.map((service) => (
          <ServicesCard key={service.id} data={service} />
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
