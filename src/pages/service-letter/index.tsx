import { Plus } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import DayService from "../../components/services/instant-service-tab.tsx/day-service.tsx";
import HourService from "../../components/services/instant-service-tab.tsx/hour-service.tsx";
import CartPrices from "../../components/shared/cart-prices";
import Container from "../../components/shared/container";
import RcDatePicker from "../../components/shared/rc-date-picker";
import useModeStore from "../../store/mode-store.tsx";

function ServiceLetterPage() {
  const [active, setActive] = useState(true);
  const { mode } = useModeStore();

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
          <button disabled={!active} className="btn btn-primary w-full">
            Proceed to pay
          </button>
        </div>
      </Container>
    </div>
  );
}

export default ServiceLetterPage;
