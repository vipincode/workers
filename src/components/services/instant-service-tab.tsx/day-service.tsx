import { useDayRateStore } from "../../../store/day-service-store";

const DayService = () => {
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
  } = useDayRateStore();
  return (
    <div className="mt-8 border p-4 rounded-md">
      <div className="flex justify-between items-center my-6">
        <div className="font-semibold">Meson</div>
        <div>800/day</div>
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
      <div className="flex justify-between items-center my-6">
        <div className="font-semibold">Helper</div>
        <div>600/day</div>
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
        <hr className="my-10" />
        <div>
          <h3 className="font-semibold">Over Time</h3>
          <p>After 5 pm if you want these messo helpers to work overtime then then per hours rs will e chared.</p>
        </div>
        <div className="flex justify-between items-center my-6">
          <div className="font-semibold">Meson</div>
          <div>150/day</div>
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
        <div className="flex justify-between items-center my-6">
          <div className="font-semibold">Helper</div>
          <div>150/day</div>
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
  );
};

export default DayService;
