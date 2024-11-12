import { Link } from "react-router-dom";
import BookServicesForm from "../../components/services/book-service-form";
import Container from "../../components/shared/container";
import ServicesCarouselCard from "../../components/shared/services-carousel-card";
import { usePermanentServices } from "../../react-query/hooks";
import PermanentServiceLoading from "../../components/services/loader/permanent-service-loading";

const PermanentServices = () => {
  const { data, status } = usePermanentServices(4);
  if (status === "error") {
    return <p>Something went wrong try again</p>;
  }

  if (status === "pending") {
    return <PermanentServiceLoading />;
  }
  return (
    <div>
      <Container className="my-10 min-h-[60vh]">
        <div className="breadcrumbs text-sm">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>Permanent Services</li>
          </ul>
        </div>
        <h2 className="text-[24px] font-semibold mb-6 mt-6">Permanent Services</h2>
        <ServicesCarouselCard data={data.slider_slogans} />
        <div className="text-[24px] font-semibold mb-6 mt-6">
          <h2>Book Your Service</h2>
          <BookServicesForm />
        </div>
        <div className="bg-gray-200 p-6 rounded-md mt-10">
          <h2 className="text-[42px] font-semibold text-center">Customercare services</h2>
          <h2 className="text-[18px] font-medium text-center">+00-8676767676767</h2>
          <div className="flex justify-center gap-5 mt-10">
            <div>
              <p className="italic text-sm font-semibold text-blue-600">WhatsApp</p>
              <p className="text-xs font-medium">+91-898989898999</p>
            </div>
            <div>
              <p className="italic text-sm font-semibold text-blue-600">Email</p>
              <p className="text-xs font-medium">+91-898989898999</p>
            </div>
            <div>
              <p className="italic text-sm font-semibold text-blue-600">Office</p>
              <p className="text-xs font-medium">+91-898989898999</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PermanentServices;
