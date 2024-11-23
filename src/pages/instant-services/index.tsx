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
import { useServiceStore } from "../../store/instant-service-store.ts";

const InstantServices = () => {
  const { id } = useParams();
  //Need to pass over cart

  const setInstantServiceId = useServiceStore((state) => state.setInstantServiceId);
  const setServiceId = useServiceStore((state) => state.setServiceId);

  // Save the values to Zustand store

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

  // Set Id in local storage

  setInstantServiceId(data.instant_service.id);
  setServiceId(data.instant_service.service_id);
  const dayRateStoreData = JSON.parse(localStorage.getItem("day-rate-store") || "{}");
  const hourRateStoreData = JSON.parse(localStorage.getItem("hour-rate-store") || "{}");

  const tip = mode === "day" ? dayRateStoreData?.state?.tipValue ?? 0 : hourRateStoreData?.state?.tipValue ?? 0;

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
              {mode === "day" && <p>{tip ? totalDayPrice + tip : totalDayPrice}</p>}
              {mode === "hour" && <p>{tip ? totalHourPrice + tip : totalHourPrice}</p>}
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-[50px] mb-[100px]">
          <button
            className="btn btn-primary min-w-[300px]"
            onClick={() => navigation(`/cart/?service=${mode === "day" ? "day" : "hour"}`)}
          >
            View Cart
          </button>
        </div>
      </Container>
    </div>
  );
};

export default InstantServices;
