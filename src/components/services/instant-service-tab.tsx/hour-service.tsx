import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useHourRateStore } from "../../../store/hour-service-store";
import { InstantService } from "../../../types";

const HourService = () => {
  const navigate = useNavigate();
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

  const [instantService, setInstantService] = useState<InstantService | null>(null);

  useEffect(() => {
    const prices = localStorage.getItem("day-prices");
    if (prices) {
      setInstantService(JSON.parse(prices));
    } else {
      navigate("/error-page", { replace: true }); // Redirect if no data
    }
  }, [navigate]);

  if (!instantService) {
    return null; // Prevent rendering if data is not loaded
  }

  return (
    <div className="mt-8 border p-4 rounded-md">
      <div className="flex justify-between items-center my-6">
        <div className="font-semibold">Meson</div>
        <div>{instantService.per_day_meason_rate || 200}/hour</div>
        <div className="flex items-center w-[180px]">
          <button className="w-[50px] font-semibold" onClick={decrementMesonHour}>
            -
          </button>
          <input
            type="number"
            value={mesonHourCount}
            className="input input-bordered input-xs w-full flex-1 text-center"
            readOnly
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
            className="input input-bordered input-xs w-full text-center font-medium"
          />
        </div>
      </div>
      <div className="flex justify-between items-center my-6">
        <div className="font-semibold">Helper</div>
        <div>{instantService.per_hour_helper_rate || 200}/hour</div>
        <div className="flex items-center w-[180px]">
          <button className="w-[50px] font-semibold" onClick={decrementHelperHour}>
            -
          </button>
          <input
            type="number"
            value={helperHourCount}
            className="input input-bordered input-xs w-full flex-1 text-center"
            readOnly
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
            className="input input-bordered input-xs w-full text-center font-medium"
          />
        </div>
      </div>
    </div>
  );
};

export default HourService;

// OLD CODE
// import { useHourRateStore } from "../../../store/hour-service-store";
// import { InstantService } from "../../../types";

// const HourService = () => {
//   const {
//     decrementHelperHour,
//     decrementMesonHour,
//     helperHourCount,
//     incrementHelperHour,
//     incrementMesonHour,
//     mesonHourCount,
//     totalHelperHourRate,
//     totalMesonHourRate,
//   } = useHourRateStore();

//   const prices = localStorage.getItem("day-prices");
//   let instantService: InstantService;
//   if (prices) {
//     instantService = JSON.parse(prices);
//   }

//   return (
//     <div className="mt-8 border p-4 rounded-md">
//       <div className="flex justify-between items-center my-6">
//         <div className="font-semibold">Meson</div>
//         <div>{instantService.per_day_meason_rate || 200}/hour</div>
//         <div className="flex items-center w-[180px]">
//           <button className="w-[50px] font-semibold" onClick={decrementMesonHour}>
//             -
//           </button>
//           <input
//             type="number"
//             value={mesonHourCount}
//             className="input input-bordered input-xs w-full flex-1 text-center"
//           />
//           <button className="w-[50px] font-semibold" onClick={incrementMesonHour}>
//             +
//           </button>
//         </div>
//         <div className="w-[120px]">
//           <input
//             type="number"
//             readOnly
//             value={totalMesonHourRate}
//             className="input input-bordered input-xs w-full text-center  font-medium"
//           />
//         </div>
//       </div>
//       <div className="flex justify-between items-center my-6">
//         <div className="font-semibold">Helper</div>
//         <div>{instantService.per_hour_helper_rate || 200}/hour</div>
//         <div className="flex items-center w-[180px]">
//           <button className="w-[50px] font-semibold" onClick={decrementHelperHour}>
//             -
//           </button>
//           <input
//             type="number"
//             value={helperHourCount}
//             className="input input-bordered input-xs w-full flex-1 text-center"
//           />
//           <button className="w-[50px] font-semibold" onClick={incrementHelperHour}>
//             +
//           </button>
//         </div>
//         <div className="w-[120px]">
//           <input
//             type="number"
//             value={totalHelperHourRate}
//             readOnly
//             className="input input-bordered input-xs w-full text-center  font-medium"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HourService;
