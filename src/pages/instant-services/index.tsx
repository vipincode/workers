import { Link, useNavigate, useParams } from "react-router-dom";
import Container from "../../components/shared/container";
import ServicesCarouselCard from "../../components/shared/services-carousel-card";
import { IndianRupee } from "lucide-react";
import { useInstantServices } from "../../react-query/hooks";
import { useDayRateStore } from "../../store/day-service-store";
import { useHourRateStore } from "../../store/hour-service-store";
import InstantServicesTab from "../../components/services/instant-service-tab.tsx";
import useModeStore from "../../store/mode-store.tsx";
import InstantServiceLoading from "../../components/services/loader/instant-service-loading.tsx";

const InstantServices = () => {
  const { id } = useParams();

  const navigation = useNavigate();
  const mode = useModeStore((state) => state.mode);

  const { totalDayPrice } = useDayRateStore();

  const { totalHourPrice } = useHourRateStore();

  const { data, status } = useInstantServices(parseInt(id));
  if (status === "error") {
    return <p>Something went wrong..</p>;
  }

  if (status === "pending") {
    return <InstantServiceLoading />;
  }

  return (
    <div>
      <Container className="my-10 min-h-[60vh]">
        <div className="breadcrumbs text-sm">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>Instant Services</li>
          </ul>
        </div>
        <h2 className="text-[24px] font-semibold mb-6 mt-6">Instant Services</h2>
        <ServicesCarouselCard data={data.slider_slogans} />
        <div className="mt-10">
          <InstantServicesTab instantServiceData={data.instant_service} />
        </div>
        <div className="flex justify-end mt-[50px] bg-gray-200 p-[50px] rounded-md">
          <div className="flex items-center gap-4">
            <p className="text-[32px]">Total Price:</p>
            <div className="flex items-center font-medium text-[32px]">
              <IndianRupee size={32} />
              {mode === "day" && <p>{totalDayPrice}</p>}
              {mode === "hour" && <p>{totalHourPrice}</p>}
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-[50px] mb-[100px]">
          <button
            className="btn btn-primary min-w-[300px]"
            onClick={() => navigation(`/cart/?${mode === "day" ? "day" : "hour"}=service`)}
          >
            View Cart
          </button>
        </div>
      </Container>
    </div>
  );
};

export default InstantServices;
