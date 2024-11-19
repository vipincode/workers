import { IndianRupee } from "lucide-react";
import { useDayRateStore } from "../../store/day-service-store";
import { useHourRateStore } from "../../store/hour-service-store";
import { useLocation } from "react-router-dom";

const CartPrices = () => {
  const { totalMesonDayRate, totalHelperDayRate, totalMesonOvertimeRate, totalHelperOvertimeRate, totalDayPrice } =
    useDayRateStore();
  const { totalHelperHourRate, totalHourPrice, totalMesonHourRate } = useHourRateStore();

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  // Get the value of the 'day' parameter
  const day = queryParams.get("day");
  return (
    <div>
      <h3 className="font-semibold">Billing Overview</h3>
      {day ? (
        <div className="text-right divide-y">
          <p className="flex justify-between items-center text-sm gap-4 py-4">
            Meson:
            <strong className="flex items-center gap-1">
              <IndianRupee size={14} /> {totalMesonDayRate}
            </strong>
          </p>
          <p className="flex justify-between items-center text-sm gap-4 py-4">
            Helper:
            <strong className="flex items-center gap-1">
              <IndianRupee size={14} /> {totalHelperDayRate}
            </strong>
          </p>
          <p className="flex justify-between items-center text-sm gap-4 py-4">
            Meson Overtime:
            <strong className="flex items-center gap-1">
              <IndianRupee size={14} /> {totalMesonOvertimeRate}
            </strong>
          </p>
          <p className="flex justify-between items-center text-sm gap-4 py-4">
            Helper Overtime:
            <strong className="flex items-center gap-1">
              <IndianRupee size={14} /> {totalHelperOvertimeRate}
            </strong>
          </p>
          <p className="flex justify-between items-center text-base font-medium gap-4 py-6">
            Total:
            <strong className="flex items-center gap-1">
              <IndianRupee size={14} /> {totalDayPrice}
            </strong>
          </p>
        </div>
      ) : (
        <div className="text-right divide-y">
          <p className="flex justify-between items-center text-sm gap-4 py-4">
            Meson:
            <strong className="flex items-center gap-1">
              <IndianRupee size={14} /> {totalMesonHourRate}
            </strong>
          </p>
          <p className="flex justify-between items-center text-sm gap-4 py-4">
            Helper:
            <strong className="flex items-center gap-1">
              <IndianRupee size={14} /> {totalHelperHourRate}
            </strong>
          </p>
          <p className="flex justify-between items-center text-base font-medium gap-4 py-6">
            Total:
            <strong className="flex items-center gap-1">
              <IndianRupee size={14} /> {totalHourPrice}
            </strong>
          </p>
        </div>
      )}
    </div>
  );
};

export default CartPrices;
