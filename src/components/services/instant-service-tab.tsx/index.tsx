import React from "react";
import { useDayRateStore } from "../../../store/day-service-store";
import { useHourRateStore } from "../../../store/hour-service-store";
import useModeStore from "../../../store/mode-store";
import { InstantService } from "../../../types";

interface InstantServiceProps {
  instantServiceData: InstantService;
}

const InstantServicesTab = ({ instantServiceData }: InstantServiceProps) => {
  const { mode, setMode } = useModeStore();

  const {
    mesonDayCount,
    helperDayCount,
    totalMesonDayRate,
    incrementMesonDay,
    decrementMesonDay,
    totalHelperDayRate,
    incrementHelperDay,
    decrementHelperDay,
    mesonOvertimeCount,
    helperOvertimeCount,
    totalMesonOvertimeRate,
    totalHelperOvertimeRate,
    incrementMesonOvertime,
    decrementMesonOvertime,
    incrementHelperOvertime,
    decrementHelperOvertime,

    setMesonDayRate,
    setHelperDayRate,
    setMesonOvertimeRate,
    setHelperOvertimeRate,
  } = useDayRateStore((state) => state);

  const {
    decrementHelperHour,
    decrementMesonHour,
    helperHourCount,
    incrementHelperHour,
    incrementMesonHour,
    mesonHourCount,
    totalHelperHourRate,
    totalMesonHourRate,

    setMesonRate,
    setHelperRate,
  } = useHourRateStore((state) => state);

  React.useEffect(() => {
    if (instantServiceData) {
      setMesonRate(instantServiceData.per_hour_meason_rate || 200);
      setHelperRate(instantServiceData.per_hour_helper_rate || 150);
      // Day

      setMesonDayRate(instantServiceData.per_day_meason_rate);
      setHelperDayRate(instantServiceData.per_day_helper_rate);
      setMesonOvertimeRate(instantServiceData.overtime_meason_rate);
      setHelperOvertimeRate(instantServiceData.overtime_helper_rate);
    }
  }, [instantServiceData, setMesonRate, setHelperRate, setMesonDayRate, setHelperDayRate, setHelperOvertimeRate]);

  return (
    <div role="tablist" className="tabs tabs-lifted">
      {/* DAYS RATE */}
      <input
        defaultChecked
        checked={mode === "day"}
        type="radio"
        name="my_tabs_2"
        role="tab"
        className="tab font-semibold"
        aria-label="Day"
        onChange={() => setMode("day")}
      />
      <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box md:p-6">
        <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center my-6">
          <div className="font-semibold">Meson</div>
          <div>{instantServiceData.per_day_meason_rate || 800}/day</div>
          <div className="flex items-center w-[180px]">
            <button className="w-[50px] font-semibold" onClick={decrementMesonDay}>
              -
            </button>
            <input
              type="number"
              value={mesonDayCount}
              className="input input-bordered input-xs w-full flex-1 text-center"
            />
            <button className="w-[50px] font-semibold" onClick={incrementMesonDay}>
              +
            </button>
          </div>
          <div className="w-[120px]">
            <input
              type="number"
              readOnly
              value={totalMesonDayRate}
              className="input input-bordered input-xs w-full text-center  font-medium"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center my-6">
          <div className="font-semibold">Helper</div>
          <div>{instantServiceData.per_day_helper_rate || 600}/day</div>
          <div className="flex items-center w-[180px]">
            <button className="w-[50px] font-semibold" onClick={decrementHelperDay}>
              -
            </button>
            <input
              type="number"
              value={helperDayCount}
              className="input input-bordered input-xs w-full flex-1 text-center"
            />
            <button className="w-[50px] font-semibold" onClick={incrementHelperDay}>
              +
            </button>
          </div>
          <div className="w-[120px]">
            <input
              type="number"
              value={totalHelperDayRate}
              readOnly
              className="input input-bordered input-xs w-full text-center  font-medium"
            />
          </div>
        </div>
        <div>
          <hr className="my-4 md:my-10" />
          <div className="px-4 md:px-0">
            <h3 className="font-semibold">Over Time</h3>
            <p>After 5 pm if you want these messo helpers to work overtime then then per hours rs will e chared.</p>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center my-6">
            <div className="font-semibold">Meson</div>
            <div>{instantServiceData.overtime_meason_rate || 200}/day</div>
            <div className="flex items-center w-[180px]">
              <button className="w-[50px] font-semibold" onClick={decrementMesonOvertime}>
                -
              </button>
              <input
                type="number"
                value={mesonOvertimeCount}
                className="input input-bordered input-xs w-full flex-1 text-center"
              />
              <button className="w-[50px] font-semibold" onClick={incrementMesonOvertime}>
                +
              </button>
            </div>
            <div className="w-[120px]">
              <input
                type="number"
                readOnly
                value={totalMesonOvertimeRate}
                className="input input-bordered input-xs w-full text-center  font-medium"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center my-6">
            <div className="font-semibold">Helper</div>
            <div>{instantServiceData.overtime_helper_rate || 150}/day</div>
            <div className="flex items-center w-[180px]">
              <button className="w-[50px] font-semibold" onClick={decrementHelperOvertime}>
                -
              </button>
              <input
                type="number"
                value={helperOvertimeCount}
                className="input input-bordered input-xs w-full flex-1 text-center"
              />
              <button className="w-[50px] font-semibold" onClick={incrementHelperOvertime}>
                +
              </button>
            </div>
            <div className="w-[120px]">
              <input
                type="number"
                value={totalHelperOvertimeRate}
                readOnly
                className="input input-bordered input-xs w-full text-center font-medium"
              />
            </div>
          </div>
        </div>
      </div>

      {/* HOURS RATE */}
      <input
        checked={mode === "hour"}
        type="radio"
        onChange={() => setMode("hour")}
        name="my_tabs_2"
        role="tab"
        className="tab font-semibold"
        aria-label="Hours"
      />
      <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
        <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center my-6">
          <div className="font-semibold">Meson</div>
          <div>{instantServiceData.per_hour_meason_rate || 200}/hour</div>
          <div className="flex items-center w-[180px]">
            <button className="w-[50px] font-semibold" onClick={decrementMesonHour}>
              -
            </button>
            <input
              type="number"
              value={mesonHourCount}
              className="input input-bordered input-xs w-full flex-1 text-center"
            />
            <button className="w-[50px] font-semibold" onClick={incrementMesonHour}>
              +
            </button>
          </div>
          <div className="w-[120px]">
            <input
              type="number"
              readOnly
              value={totalMesonHourRate}
              className="input input-bordered input-xs w-full text-center  font-medium"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center my-6">
          <div className="font-semibold">Helper</div>
          <div>{instantServiceData.per_hour_helper_rate || 150}/hour</div>
          <div className="flex items-center w-[180px]">
            <button className="w-[50px] font-semibold" onClick={decrementHelperHour}>
              -
            </button>
            <input
              type="number"
              value={helperHourCount}
              className="input input-bordered input-xs w-full flex-1 text-center"
            />
            <button className="w-[50px] font-semibold" onClick={incrementHelperHour}>
              +
            </button>
          </div>
          <div className="w-[120px]">
            <input
              type="number"
              value={totalHelperHourRate}
              readOnly
              className="input input-bordered input-xs w-full text-center  font-medium"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstantServicesTab;
