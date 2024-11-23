import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import CartPrices from "../../components/shared/cart-prices";
import Container from "../../components/shared/container";
import { getCities, getStates } from "../../react-query/apis";
import { RAZORPAY_KEY_ID } from "../../react-query/constants";
import { useDayRateStore } from "../../store/day-service-store";
import { useHourRateStore } from "../../store/hour-service-store";
import useModeStore from "../../store/mode-store";
import { CitiesResponse, StateProps } from "../../types";
import DayService from "../../components/services/instant-service-tab.tsx/day-service";
import HourService from "../../components/services/instant-service-tab.tsx/hour-service";
import toast from "react-hot-toast";
// import { useSearchParams } from "react-router-dom";

const instantServiceObjSchema = z.object({
  mesonDayCount: z.number(),
  helperDayCount: z.number(),
  mesonRate: z.number(),
  helperRate: z.number(),
  mesonOvertimeCount: z.number(),
  helperOvertimeCount: z.number(),
  mesonOvertimeRate: z.number(),
  helperOvertimeRate: z.number(),
  totalMesonDayRate: z.number(),
  totalHelperDayRate: z.number(),
  totalMesonOvertimeRate: z.number(),
  totalHelperOvertimeRate: z.number(),
  totalDayPrice: z.number(),
  tipValue: z.number(),
});

const formSchema = z.object({
  state_id: z.string(),
  city_id: z.string(),
  book_date: z
    .string()
    .refine((date) => !isNaN(Date.parse(date)), {
      message: "Invalid date format",
    })
    .optional(),
  time_slot: z.string(),
  pincode: z.string().min(6, "Pincode must be at least 6 digits"),
  address: z.string().min(1, "Address is required"),
  user_id: z.number().optional(),
  service_id: z.number().optional(),
  instant_service_id: z.number().optional(),
  mode: z.enum(["day", "hour"]).optional(),
  pick_and_drop: z.enum(["0", "1"]).optional(),
  tip: z.number().optional(),
  coupon_code: z.string().optional(),
  coupon_discounted: z.number().optional(),
  instant_service_obj: instantServiceObjSchema.optional(),
  status: z.enum(["0", "1"]).optional(),
  transaction_id: z.string().optional(),
  total_amount: z.number().optional(),
});

type FormData = z.infer<typeof formSchema>;

function ServiceLetterPage() {
  const [selectedStateId, setSelectedStateId] = useState<number | null>(null);
  const [active, setActive] = useState(true);
  const mode = useModeStore((state) => state.mode);
  // const [searchParams] = useSearchParams();
  // const mode = searchParams.get("service");

  const { totalDayPrice } = useDayRateStore();
  const { totalHourPrice } = useHourRateStore();

  const dayRateStoreData = JSON.parse(localStorage.getItem("day-rate-store") || "{}");
  const hourRateStoreData = JSON.parse(localStorage.getItem("hour-rate-store") || "{}");
  const instantServiceStoreData = JSON.parse(localStorage.getItem("service-store") || "{}");

  const price = useMemo(() => {
    return mode === "day" ? totalDayPrice : totalHourPrice;
  }, [mode, totalDayPrice, totalHourPrice]);

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
    setSelectedStateId(stateValue ? Number(stateValue) : null);
  }, [stateValue]);

  const tip = mode === "day" ? dayRateStoreData?.state?.tipValue ?? 0 : hourRateStoreData?.state?.tipValue ?? 0;
  const totalPrice = mode === "day" ? dayRateStoreData.state.totalDayPrice : hourRateStoreData.state.totalHourPrice;

  const onSubmit = async (data: FormData) => {
    const extendedData: FormData = {
      ...data,
      user_id: 1,
      service_id: instantServiceStoreData.state.serviceId,
      instant_service_id: instantServiceStoreData.state.instantServiceId,
      mode: mode as "day" | "hour",
      pick_and_drop: "0" as "0" | "1",
      tip: tip,
      total_amount: totalPrice,
      coupon_code: "",
      coupon_discounted: 0,
      instant_service_obj: mode === "day" ? dayRateStoreData.state : hourRateStoreData.state,
      status: "1" as "0" | "1",
      transaction_id: "",
    };

    const validatedData = formSchema.parse(extendedData);
    await handlePayment(validatedData);
  };

  const handlePayment = async (extendedData: FormData) => {
    const validatedData = formSchema.parse(extendedData);
    const final_price = (100 * price).toFixed(2);

    const options = {
      key: RAZORPAY_KEY_ID,
      amount: final_price,
      currency: "INR",
      name: "Dehatwala",
      description: "Provide service for labor",
      image: "https://dehatwala.com/storage/category/1728384957images - 2024-10-08T162501.156.jpeg",
      handler: async function (response: { razorpay_payment_id: string }) {
        if (response.razorpay_payment_id) {
          validatedData.transaction_id = response.razorpay_payment_id;

          const formData = new FormData();
          Object.entries(validatedData).forEach(([key, value]) => {
            formData.append(key, typeof value === "object" ? JSON.stringify(value) : String(value));
          });

          try {
            const APIURL = "https://dehatwala.com/api/save-book-service";
            const result = await fetch(APIURL, {
              method: "POST",
              body: formData,
            });

            if (result.ok) {
              const responseData = await result.json();
              console.log("Booking saved successfully:", responseData);

              localStorage.removeItem("day-rate-store");
              localStorage.removeItem("hour-rate-store");
              localStorage.removeItem("service-store");
              toast.success("Booking saved successfully!");
            } else {
              console.error("Failed to save booking:", result.status, result.statusText);
              toast.error("Failed to save booking.");
            }
          } catch (error) {
            console.error("Error while saving booking:", error);
            toast.error("An error occurred while saving the booking.");
          }
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

    const razorpay = new (window as any).Razorpay(options);
    razorpay.open();
  };

  if (isErrorStates || isErrorCities) return <p>Error loading data...</p>;

  return (
    <div className="min-h-[60vh] mb-[100px] ">
      <Container className="min-h-[60vh] mb-[100px] max-w-[60%] ">
        <div className="mt-7">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="label" htmlFor="book_date">
                  <span className="label-text">Date</span>
                </label>
                <input
                  type="date"
                  {...register("book_date")}
                  placeholder="Type here"
                  className="input input-bordered w-full"
                />
                {errors.book_date && <span className="text-error text-sm mt-1">{errors.book_date.message}</span>}
              </div>
              <div>
                <label className="label" htmlFor="time_slot">
                  <span className="label-text">Time</span>
                </label>
                <input
                  type="time"
                  {...register("time_slot")}
                  placeholder="Type here"
                  className="input input-bordered w-full"
                />
                {errors.time_slot && <span className="text-error text-sm mt-1">{errors.time_slot.message}</span>}
              </div>
            </div>
            <div>
              <label className="label" htmlFor="address">
                <span className="label-text">Address</span>
              </label>
              <textarea
                {...register("address")}
                id="address"
                className="textarea textarea-bordered w-full"
                placeholder="Address"
              ></textarea>
              {errors.address && <span className="text-error text-sm mt-1">{errors.address.message}</span>}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
              <div>
                <label className="label" htmlFor="pin">
                  <span className="label-text">Pin code</span>
                </label>
                <input
                  {...register("pincode")}
                  id="pin"
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full"
                />
                {errors.pincode && <span className="text-error text-sm mt-1">{errors.pincode.message}</span>}
              </div>
            </div>
            <div className="relative pt-10 mb-8">
              <button
                className="btn btn-primary btn-xs mt-10 absolute right-0 -top-2"
                onClick={() => setActive(!active)}
              >
                {active ? "Edit" : "Save"}
              </button>
              {active && <CartPrices />}
              {!active && mode === "day" && <DayService />}
              {!active && mode === "hour" && <HourService />}
            </div>
            <button type="submit" disabled={!active} className="btn btn-primary w-full mt-4">
              Proceed to pay
            </button>
          </form>
        </div>
      </Container>
    </div>
  );
}

export default ServiceLetterPage;
