import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import DayService from "../../components/services/instant-service-tab.tsx/day-service.tsx";
import HourService from "../../components/services/instant-service-tab.tsx/hour-service.tsx";
import CartPrices from "../../components/shared/cart-prices";
import Container from "../../components/shared/container";
import { getCities, getStates } from "../../react-query/apis.ts";
import { RAZORPAY_KEY_ID } from "../../react-query/constants.ts";
import { useDayRateStore } from "../../store/day-service-store.tsx";
import { useHourRateStore } from "../../store/hour-service-store.tsx";
import useModeStore from "../../store/mode-store.tsx";
import { CitiesResponse, StateProps } from "../../types";

function ServiceLetterPage() {
  const [selectedStateId, setSelectedStateId] = useState<number | null>(null);
  const [active, setActive] = useState(true);
  // const { mode } = useModeStore();
  const mode = useModeStore((state) => state.mode);

  //Price values
  const { totalDayPrice } = useDayRateStore();
  const { totalHourPrice } = useHourRateStore();

  //Payments
  const price = useMemo(() => {
    return mode === "day" ? totalDayPrice : totalHourPrice;
  }, [mode, totalDayPrice, totalHourPrice]);

  const handlePayment = async () => {
    let final_price = (100 * price).toFixed(2); // Fix final_price calculation

    const options = {
      key: RAZORPAY_KEY_ID,
      amount: final_price, // Razorpay expects the amount in paise (smallest currency unit)
      currency: "INR",
      name: "Dehatwala",
      description: "Provide service for labor",
      image: "https://dehatwala.com/storage/category/1728384957images - 2024-10-08T162501.156.jpeg",
      handler: async function (response) {
        if (response.razorpay_payment_id) {
          alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
          // data.razorpay_payment_id = response.razorpay_payment_id;
          // await CartCheckoutAPI(APIURL, data); // Use await for the API call
          // setprevent_api_call(true);
        }
      },
      prefill: {
        name: "Your Name",
        email: "your-email@example.com",
        contact: "",
      },
      notes: {
        address: "",
      },
      theme: {
        color: "#F37256",
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  const formSchema = z.object({
    state_id: z.string().min(1, "State is required"),
    city_id: z.string().min(1, "City is required"),
  });

  type FormData = z.infer<typeof formSchema>;

  // Het city and letter
  const {
    data: states,
    isLoading: isLoadingStates,
    isError: isErrorStates,
  } = useQuery<StateProps, Error>({
    queryKey: ["states"],
    queryFn: getStates,
    staleTime: Infinity,
  });

  const {
    data: cities,
    isLoading: isLoadingCities,
    isError: isErrorCities,
  } = useQuery<CitiesResponse, Error>({
    queryKey: ["cities", selectedStateId],
    queryFn: () => getCities(selectedStateId),
    enabled: !!selectedStateId,
    staleTime: Infinity,
  });

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const stateValue = watch("state_id");
  useEffect(() => {
    setSelectedStateId(Number(stateValue));
  }, [stateValue]);

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  if (isErrorStates || isErrorCities) return <p>Error loading data...</p>;

  return (
    <div className="min-h-[60vh] mb-[100px] ">
      <Container className="min-h-[60vh] mb-[100px] max-w-[60%] ">
        <div className="mt-7">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {isLoadingStates ? (
                <div className="space-y-3">
                  <div className="skeleton h-5 w-16" />
                  <div className="skeleton h-8 w-full" />
                </div>
              ) : (
                <div className="form-control">
                  <label className="label" htmlFor="state_id">
                    <span className="label-text">State</span>
                  </label>
                  <select
                    id="state_id"
                    {...register("state_id", { required: "State is required" })}
                    className={`select select-bordered w-full ${errors.state_id ? "select-error" : ""}`}
                  >
                    <option value="">Select a state</option>
                    {states?.states.map((state) => (
                      <option key={state.id} value={state.id}>
                        {state.name}
                      </option>
                    ))}
                  </select>
                  {errors.state_id && <span className="text-error text-sm mt-1">{errors.state_id.message}</span>}
                </div>
              )}

              {isLoadingCities ? (
                <div className="space-y-3">
                  <div className="skeleton h-5 w-16" />
                  <div className="skeleton h-8 w-full" />
                </div>
              ) : (
                <div className="form-control">
                  <label className="label" htmlFor="city_id">
                    <span className="label-text">City</span>
                  </label>
                  <select
                    id="city_id"
                    {...register("city_id", { required: "City is required" })}
                    className={`select select-bordered w-full ${errors.city_id ? "select-error" : ""}`}
                    disabled={!selectedStateId || isLoadingCities}
                  >
                    <option value="">Select a city</option>
                    {(cities?.cites || []).map((city) => (
                      <option key={city.id} value={city.id}>
                        {city.name}
                      </option>
                    ))}
                  </select>
                  {errors.city_id && <span className="text-error text-sm mt-1">{errors.city_id.message}</span>}
                </div>
              )}
            </div>
          </form>
          <div className="relative pt-10 mb-8">
            <button className="btn btn-primary btn-xs mt-10 absolute right-0 -top-2" onClick={() => setActive(!active)}>
              {active ? "Edit" : "Save"}
            </button>
            {active && <CartPrices />}
            {!active && mode === "day" && <DayService />}
            {!active && mode === "hour" && <HourService />}
          </div>

          <button disabled={!active} className="btn btn-primary w-full" onClick={handlePayment}>
            Proceed to pay
          </button>
        </div>
      </Container>
    </div>
  );
}

export default ServiceLetterPage;
