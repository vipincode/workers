import { IndianRupee } from "lucide-react";
import { useDayRateStore } from "../../store/day-service-store";
import { useHourRateStore } from "../../store/hour-service-store";
import { useSearchParams } from "react-router-dom";

const CartPrices = () => {
  const { totalMesonDayRate, totalHelperDayRate, totalMesonOvertimeRate, totalHelperOvertimeRate, totalDayPrice } =
    useDayRateStore();
  const { totalHelperHourRate, totalHourPrice, totalMesonHourRate } = useHourRateStore();

  const [searchParams] = useSearchParams();
  const day = searchParams.get("service");

  // Get tip price from local storage
  const dayRateStoreData = JSON.parse(localStorage.getItem("day-rate-store") || "{}");
  const hourRateStoreData = JSON.parse(localStorage.getItem("hour-rate-store") || "{}");

  const tip = day === "day" ? dayRateStoreData?.state?.tipValue ?? 0 : hourRateStoreData?.state?.tipValue ?? 0;

  return (
    <div>
      <h3 className="font-semibold">Billing Overview</h3>
      {day === "day" ? (
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
              <IndianRupee size={14} /> {totalDayPrice + tip}
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
              <IndianRupee size={14} /> {totalHourPrice + tip}
            </strong>
          </p>
        </div>
      )}
    </div>
  );
};

export default CartPrices;
