import { useHourRateStore } from "../../../store/hour-service-store";

const HourService = () => {
  const {
    decrementHelperHour,
    decrementMesonHour,
    helperHourCount,
    incrementHelperHour,
    incrementMesonHour,
    mesonHourCount,
    totalHelperHourRate,
    totalMesonHourRate,
  } = useHourRateStore();
  return (
    <div className="mt-8 border p-4 rounded-md">
      <div className="flex justify-between items-center my-6">
        <div className="font-semibold">Meson</div>
        <div>250/day</div>
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
      <div className="flex justify-between items-center my-6">
        <div className="font-semibold">Helper</div>
        <div>200/day</div>
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
  );
};

export default HourService;
