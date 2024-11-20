// import { create } from "zustand";
// import { persist } from "zustand/middleware";

// const MESON_RATE = 800;
// const HELPER_RATE = 600;
// const MESON_OVERTIME_RATE = 150;
// const HELPER_OVERTIME_RATE = 150;
// interface RateState {
//   mesonDayCount: number;
//   helperDayCount: number;
//   mesonOvertimeCount: number;
//   helperOvertimeCount: number;

//   totalMesonDayRate: number;
//   totalHelperDayRate: number;
//   totalMesonOvertimeRate: number;
//   totalHelperOvertimeRate: number;

//   totalPrice: number;

//   incrementMesonDay: () => void;
//   decrementMesonDay: () => void;
//   incrementHelperDay: () => void;
//   decrementHelperDay: () => void;

//   incrementMesonOvertime: () => void;
//   decrementMesonOvertime: () => void;
//   incrementHelperOvertime: () => void;
//   decrementHelperOvertime: () => void;

//   setMesonDayRate: (rate: number) => void;
//   setHelperDayRate: (rate: number) => void;
//   setMesonOverTimeRate: (rate: number) => void;
//   setHelperOverTimeRate: (rate: number) => void;
// }

// // Custom localStorage wrapper to comply with Zustand's storage interface
// const localStorageProvider = {
//   getItem: (name: string) => {
//     const value = localStorage.getItem(name);
//     return value ? JSON.parse(value) : null;
//   },
//   setItem: (name: string, value: any) => {
//     localStorage.setItem(name, JSON.stringify(value));
//   },
//   removeItem: (name: string) => {
//     localStorage.removeItem(name);
//   },
// };

// export const useDayRateStore = create(
//   persist<RateState>(
//     (set) => ({
//       mesonDayCount: 1,
//       helperDayCount: 1,
//       mesonOvertimeCount: 0, // Initialize to 0
//       helperOvertimeCount: 0, // Initialize to 0

//       totalMesonDayRate: MESON_RATE,
//       totalHelperDayRate: HELPER_RATE,
//       totalMesonOvertimeRate: 0, // Start with 0 overtime charges
//       totalHelperOvertimeRate: 0, // Start with 0 overtime charges

//       totalPrice: MESON_RATE + HELPER_RATE, // No overtime charges initially

//       // Update the meson rate
//       setMesonDayRate: (value: number) => set({ totalMesonDayRate: value }),
//       setHelperDayRate: (value: number) => set({ totalHelperDayRate: value }),
//       setMesonOverTimeRate: (value: number) => set({ totalMesonOvertimeRate: value }),
//       setHelperOverTimeRate: (value: number) => set({ totalHelperOvertimeRate: value }),

//       incrementMesonDay: () =>
//         set((state) => {
//           const newMesonDayCount = state.mesonDayCount + 1;
//           const newTotalMesonDayRate = newMesonDayCount * MESON_RATE;
//           return {
//             mesonDayCount: newMesonDayCount,
//             totalMesonDayRate: newTotalMesonDayRate,
//             totalPrice:
//               newTotalMesonDayRate +
//               state.totalHelperDayRate +
//               state.totalMesonOvertimeRate +
//               state.totalHelperOvertimeRate,
//           };
//         }),

//       decrementMesonDay: () =>
//         set((state) => {
//           const newMesonDayCount = Math.max(1, state.mesonDayCount - 1);
//           const newTotalMesonDayRate = newMesonDayCount * MESON_RATE;
//           return {
//             mesonDayCount: newMesonDayCount,
//             totalMesonDayRate: newTotalMesonDayRate,
//             totalPrice:
//               newTotalMesonDayRate +
//               state.totalHelperDayRate +
//               state.totalMesonOvertimeRate +
//               state.totalHelperOvertimeRate,
//           };
//         }),

//       incrementHelperDay: () =>
//         set((state) => {
//           const newHelperDayCount = state.helperDayCount + 1;
//           const newTotalHelperDayRate = newHelperDayCount * HELPER_RATE;
//           return {
//             helperDayCount: newHelperDayCount,
//             totalHelperDayRate: newTotalHelperDayRate,
//             totalPrice:
//               state.totalMesonDayRate +
//               newTotalHelperDayRate +
//               state.totalMesonOvertimeRate +
//               state.totalHelperOvertimeRate,
//           };
//         }),

//       decrementHelperDay: () =>
//         set((state) => {
//           const newHelperDayCount = Math.max(1, state.helperDayCount - 1);
//           const newTotalHelperDayRate = newHelperDayCount * HELPER_RATE;
//           return {
//             helperDayCount: newHelperDayCount,
//             totalHelperDayRate: newTotalHelperDayRate,
//             totalPrice:
//               state.totalMesonDayRate +
//               newTotalHelperDayRate +
//               state.totalMesonOvertimeRate +
//               state.totalHelperOvertimeRate,
//           };
//         }),

//       incrementMesonOvertime: () =>
//         set((state) => {
//           const newMesonOvertimeCount = state.mesonOvertimeCount + 1;
//           const newTotalMesonOvertimeRate = newMesonOvertimeCount * MESON_OVERTIME_RATE;
//           return {
//             mesonOvertimeCount: newMesonOvertimeCount,
//             totalMesonOvertimeRate: newTotalMesonOvertimeRate,
//             totalPrice:
//               state.totalMesonDayRate +
//               state.totalHelperDayRate +
//               newTotalMesonOvertimeRate +
//               state.totalHelperOvertimeRate,
//           };
//         }),

//       decrementMesonOvertime: () =>
//         set((state) => {
//           const newMesonOvertimeCount = Math.max(0, state.mesonOvertimeCount - 1); // Allow overtime count to be 0
//           const newTotalMesonOvertimeRate = newMesonOvertimeCount * MESON_OVERTIME_RATE;
//           return {
//             mesonOvertimeCount: newMesonOvertimeCount,
//             totalMesonOvertimeRate: newTotalMesonOvertimeRate,
//             totalPrice:
//               state.totalMesonDayRate +
//               state.totalHelperDayRate +
//               newTotalMesonOvertimeRate +
//               state.totalHelperOvertimeRate,
//           };
//         }),

//       incrementHelperOvertime: () =>
//         set((state) => {
//           const newHelperOvertimeCount = state.helperOvertimeCount + 1;
//           const newTotalHelperOvertimeRate = newHelperOvertimeCount * HELPER_OVERTIME_RATE;
//           return {
//             helperOvertimeCount: newHelperOvertimeCount,
//             totalHelperOvertimeRate: newTotalHelperOvertimeRate,
//             totalPrice:
//               state.totalMesonDayRate +
//               state.totalHelperDayRate +
//               state.totalMesonOvertimeRate +
//               newTotalHelperOvertimeRate,
//           };
//         }),

//       decrementHelperOvertime: () =>
//         set((state) => {
//           const newHelperOvertimeCount = Math.max(0, state.helperOvertimeCount - 1); // Allow overtime count to be 0
//           const newTotalHelperOvertimeRate = newHelperOvertimeCount * HELPER_OVERTIME_RATE;
//           return {
//             helperOvertimeCount: newHelperOvertimeCount,
//             totalHelperOvertimeRate: newTotalHelperOvertimeRate,
//             totalPrice:
//               state.totalMesonDayRate +
//               state.totalHelperDayRate +
//               state.totalMesonOvertimeRate +
//               newTotalHelperOvertimeRate,
//           };
//         }),
//     }),
//     {
//       name: "day-rate-store", // Key for localStorage
//       storage: localStorageProvider, // Use the custom localStorage wrapper
//     }
//   )
// );
import { create } from "zustand";
import { persist } from "zustand/middleware";

const localStorageProvider = {
  getItem: (name: string) => {
    const value = localStorage.getItem(name);
    return value ? JSON.parse(value) : null;
  },
  setItem: (name: string, value: any) => {
    localStorage.setItem(name, JSON.stringify(value));
  },
  removeItem: (name: string) => {
    localStorage.removeItem(name);
  },
};

interface RateState {
  mesonDayCount: number;
  helperDayCount: number;

  mesonRate: number;
  helperRate: number;

  mesonOvertimeCount: number;
  helperOvertimeCount: number;

  mesonOvertimeRate: number;
  helperOvertimeRate: number;

  totalMesonDayRate: number;
  totalHelperDayRate: number;
  totalMesonOvertimeRate: number;
  totalHelperOvertimeRate: number;

  totalDayPrice: number;
  tipVale: number;

  incrementMesonDay: () => void;
  decrementMesonDay: () => void;
  incrementHelperDay: () => void;
  decrementHelperDay: () => void;

  incrementMesonOvertime: () => void;
  decrementMesonOvertime: () => void;
  incrementHelperOvertime: () => void;
  decrementHelperOvertime: () => void;

  setMesonDayRate: (rate: number) => void;
  setHelperDayRate: (rate: number) => void;
  setMesonOvertimeRate: (rate: number) => void;
  setHelperOvertimeRate: (rate: number) => void;

  setTipPrice: (value: number) => void;
}

export const useDayRateStore = create(
  persist<RateState>(
    (set) => ({
      mesonDayCount: 1,
      helperDayCount: 1,

      mesonRate: 800, // Default rates
      helperRate: 600,

      mesonOvertimeCount: 0,
      helperOvertimeCount: 0,

      mesonOvertimeRate: 200, // Default overtime rates
      helperOvertimeRate: 150,

      totalMesonDayRate: 800,
      totalHelperDayRate: 600,
      totalMesonOvertimeRate: 0,
      totalHelperOvertimeRate: 0,

      totalDayPrice: 1400, // Initial total price (meson + helper)

      tipVale: 0,

      setTipPrice: (value: number) =>
        set((state) => {
          const newTotalDayPrice =
            state.totalMesonDayRate +
            state.totalHelperDayRate +
            state.totalMesonOvertimeRate +
            state.totalHelperOvertimeRate +
            value; // Add the tip value to the total price
          return {
            tipVale: value,
            totalDayPrice: newTotalDayPrice,
          };
        }),

      setMesonDayRate: (rate: number) =>
        set((state) => {
          const newTotalMesonDayRate = state.mesonDayCount * rate;
          return {
            mesonRate: rate,
            totalMesonDayRate: newTotalMesonDayRate,
            totalDayPrice:
              newTotalMesonDayRate +
              state.totalHelperDayRate +
              state.totalMesonOvertimeRate +
              state.totalHelperOvertimeRate,
          };
        }),

      setHelperDayRate: (rate: number) =>
        set((state) => {
          const newTotalHelperDayRate = state.helperDayCount * rate;
          return {
            helperRate: rate,
            totalHelperDayRate: newTotalHelperDayRate,
            totalDayPrice:
              state.totalMesonDayRate +
              newTotalHelperDayRate +
              state.totalMesonOvertimeRate +
              state.totalHelperOvertimeRate,
          };
        }),

      setMesonOvertimeRate: (rate: number) =>
        set((state) => {
          const newTotalMesonOvertimeRate = state.mesonOvertimeCount * rate;
          return {
            mesonOvertimeRate: rate,
            totalMesonOvertimeRate: newTotalMesonOvertimeRate,
            totalDayPrice:
              state.totalMesonDayRate +
              state.totalHelperDayRate +
              newTotalMesonOvertimeRate +
              state.totalHelperOvertimeRate,
          };
        }),

      setHelperOvertimeRate: (rate: number) =>
        set((state) => {
          const newTotalHelperOvertimeRate = state.helperOvertimeCount * rate;
          return {
            helperOvertimeRate: rate,
            totalHelperOvertimeRate: newTotalHelperOvertimeRate,
            totalDayPrice:
              state.totalMesonDayRate +
              state.totalHelperDayRate +
              state.totalMesonOvertimeRate +
              newTotalHelperOvertimeRate,
          };
        }),

      incrementMesonDay: () =>
        set((state) => {
          const newMesonDayCount = state.mesonDayCount + 1;
          const newTotalMesonDayRate = newMesonDayCount * state.mesonRate;
          return {
            mesonDayCount: newMesonDayCount,
            totalMesonDayRate: newTotalMesonDayRate,
            totalDayPrice:
              newTotalMesonDayRate +
              state.totalHelperDayRate +
              state.totalMesonOvertimeRate +
              state.totalHelperOvertimeRate,
          };
        }),

      decrementMesonDay: () =>
        set((state) => {
          const newMesonDayCount = Math.max(1, state.mesonDayCount - 1);
          const newTotalMesonDayRate = newMesonDayCount * state.mesonRate;
          return {
            mesonDayCount: newMesonDayCount,
            totalMesonDayRate: newTotalMesonDayRate,
            totalDayPrice:
              newTotalMesonDayRate +
              state.totalHelperDayRate +
              state.totalMesonOvertimeRate +
              state.totalHelperOvertimeRate,
          };
        }),

      incrementHelperDay: () =>
        set((state) => {
          const newHelperDayCount = state.helperDayCount + 1;
          const newTotalHelperDayRate = newHelperDayCount * state.helperRate;
          return {
            helperDayCount: newHelperDayCount,
            totalHelperDayRate: newTotalHelperDayRate,
            totalDayPrice:
              state.totalMesonDayRate +
              newTotalHelperDayRate +
              state.totalMesonOvertimeRate +
              state.totalHelperOvertimeRate,
          };
        }),

      decrementHelperDay: () =>
        set((state) => {
          const newHelperDayCount = Math.max(1, state.helperDayCount - 1);
          const newTotalHelperDayRate = newHelperDayCount * state.helperRate;
          return {
            helperDayCount: newHelperDayCount,
            totalHelperDayRate: newTotalHelperDayRate,
            totalDayPrice:
              state.totalMesonDayRate +
              newTotalHelperDayRate +
              state.totalMesonOvertimeRate +
              state.totalHelperOvertimeRate,
          };
        }),

      incrementMesonOvertime: () =>
        set((state) => {
          const newMesonOvertimeCount = state.mesonOvertimeCount + 1;
          const newTotalMesonOvertimeRate = newMesonOvertimeCount * state.mesonOvertimeRate;
          return {
            mesonOvertimeCount: newMesonOvertimeCount,
            totalMesonOvertimeRate: newTotalMesonOvertimeRate,
            totalDayPrice:
              state.totalMesonDayRate +
              state.totalHelperDayRate +
              newTotalMesonOvertimeRate +
              state.totalHelperOvertimeRate,
          };
        }),

      decrementMesonOvertime: () =>
        set((state) => {
          const newMesonOvertimeCount = Math.max(0, state.mesonOvertimeCount - 1);
          const newTotalMesonOvertimeRate = newMesonOvertimeCount * state.mesonOvertimeRate;
          return {
            mesonOvertimeCount: newMesonOvertimeCount,
            totalMesonOvertimeRate: newTotalMesonOvertimeRate,
            totalDayPrice:
              state.totalMesonDayRate +
              state.totalHelperDayRate +
              newTotalMesonOvertimeRate +
              state.totalHelperOvertimeRate,
          };
        }),

      incrementHelperOvertime: () =>
        set((state) => {
          const newHelperOvertimeCount = state.helperOvertimeCount + 1;
          const newTotalHelperOvertimeRate = newHelperOvertimeCount * state.helperOvertimeRate;
          return {
            helperOvertimeCount: newHelperOvertimeCount,
            totalHelperOvertimeRate: newTotalHelperOvertimeRate,
            totalDayPrice:
              state.totalMesonDayRate +
              state.totalHelperDayRate +
              state.totalMesonOvertimeRate +
              newTotalHelperOvertimeRate,
          };
        }),

      decrementHelperOvertime: () =>
        set((state) => {
          const newHelperOvertimeCount = Math.max(0, state.helperOvertimeCount - 1);
          const newTotalHelperOvertimeRate = newHelperOvertimeCount * state.helperOvertimeRate;
          return {
            helperOvertimeCount: newHelperOvertimeCount,
            totalHelperOvertimeRate: newTotalHelperOvertimeRate,
            totalDayPrice:
              state.totalMesonDayRate +
              state.totalHelperDayRate +
              state.totalMesonOvertimeRate +
              newTotalHelperOvertimeRate,
          };
        }),
    }),
    {
      name: "day-rate-store", // Key for localStorage
      storage: localStorageProvider,
    }
  )
);
