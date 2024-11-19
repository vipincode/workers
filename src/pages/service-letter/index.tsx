import { Plus } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import DayService from "../../components/services/instant-service-tab.tsx/day-service.tsx";
import HourService from "../../components/services/instant-service-tab.tsx/hour-service.tsx";
import CartPrices from "../../components/shared/cart-prices";
import Container from "../../components/shared/container";
import RcDatePicker from "../../components/shared/rc-date-picker";
import useModeStore from "../../store/mode-store.tsx";
import { useHourRateStore } from "../../store/hour-service-store.tsx";
import { useDayRateStore } from "../../store/day-service-store.tsx";
import { RAZORPAY_KEY_ID } from "../../react-query/constants.ts";

function ServiceLetterPage() {
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

  return (
    <div className="min-h-[60vh] mb-[100px] ">
      <Container className="min-h-[60vh] mb-[100px] max-w-[60%] ">
        <div className="mt-7">
          <div>
            <label htmlFor="" className="font-medium block mb-1">
              Select your Date
            </label>
            <RcDatePicker />
          </div>
          <div className="mt-4">
            <label htmlFor="" className="font-medium block mb-1">
              Address
            </label>
            <textarea className="textarea textarea-bordered w-full" placeholder="You Address"></textarea>
            <Link to="#" className="flex gap-1 items-center mt-3 justify-end text-blue-600 text-sm">
              Get by Location <Plus />
            </Link>
          </div>
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
