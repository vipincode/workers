// import { create } from "zustand";
// import { persist } from "zustand/middleware";

// const MESON_RATE = 250;
// const HELPER_RATE = 200;
// interface RateState {
//   mesonHourCount: number;
//   helperHourCount: number;

//   totalMesonHourRate: number;
//   totalHelperHourRate: number;

//   totalHourPrice: number;

//   incrementMesonHour: () => void;
//   decrementMesonHour: () => void;
//   incrementHelperHour: () => void;
//   decrementHelperHour: () => void;

//   setMesonRate: (rate: number) => void;
//   setHelperRate: (rate: number) => void;
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

// export const useHourRateStore = create(
//   persist<RateState>(
//     (set) => ({
//       mesonHourCount: 1,
//       helperHourCount: 1,

//       totalMesonHourRate: MESON_RATE,
//       totalHelperHourRate: HELPER_RATE,

//       totalHourPrice: MESON_RATE + HELPER_RATE,

//       // setMesonRate: (value: number) => set({ totalMesonHourRate: value }),
//       // setHelperRate: (value: number) => set({ totalHelperHourRate: value }),
//       setMesonRate: (rate: number) =>
//         set((state) => {
//           const newTotalMesonHourRate = state.mesonHourCount * rate;
//           return {
//             mesonRate: rate,
//             totalMesonHourRate: newTotalMesonHourRate,
//             totalHourPrice: newTotalMesonHourRate + state.totalHelperHourRate,
//           };
//         }),

//       setHelperRate: (rate: number) =>
//         set((state) => {
//           const newTotalHelperHourRate = state.helperHourCount * rate;
//           return {
//             helperRate: rate,
//             totalHelperHourRate: newTotalHelperHourRate,
//             totalHourPrice: state.totalMesonHourRate + newTotalHelperHourRate,
//           };
//         }),

//       incrementMesonHour: () =>
//         set((state) => {
//           const newMesonHourCount = state.mesonHourCount + 1;
//           const newTotalMesonHourRate = newMesonHourCount * MESON_RATE;
//           return {
//             mesonHourCount: newMesonHourCount,
//             totalMesonHourRate: newTotalMesonHourRate,
//             totalHourPrice: newTotalMesonHourRate + state.totalHelperHourRate,
//           };
//         }),

//       decrementMesonHour: () =>
//         set((state) => {
//           const newMesonHourCount = Math.max(1, state.mesonHourCount - 1);
//           const newTotalMesonHourRate = newMesonHourCount * MESON_RATE;
//           return {
//             mesonHourCount: newMesonHourCount,
//             totalMesonHourRate: newTotalMesonHourRate,
//             totalHourPrice: newTotalMesonHourRate + state.totalHelperHourRate,
//           };
//         }),

//       incrementHelperHour: () =>
//         set((state) => {
//           const newHelperHourCount = state.helperHourCount + 1;
//           const newTotalHelperHourRate = newHelperHourCount * HELPER_RATE;
//           return {
//             helperHourCount: newHelperHourCount,
//             totalHelperHourRate: newTotalHelperHourRate,
//             totalHourPrice: state.totalMesonHourRate + newTotalHelperHourRate,
//           };
//         }),

//       decrementHelperHour: () =>
//         set((state) => {
//           const newHelperHourCount = Math.max(1, state.helperHourCount - 1);
//           const newTotalHelperHourRate = newHelperHourCount * HELPER_RATE;
//           return {
//             helperHourCount: newHelperHourCount,
//             totalHelperHourRate: newTotalHelperHourRate,
//             totalHourPrice: state.totalMesonHourRate + newTotalHelperHourRate,
//           };
//         }),
//     }),
//     {
//       name: "hour-rate-store", // Key for localStorage
//       storage: localStorageProvider, // Use the custom localStorage wrapper
//     }
//   )
// );
import { create } from "zustand";
import { persist } from "zustand/middleware";

// Custom localStorage wrapper to comply with Zustand's storage interface
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
  mesonHourCount: number;
  helperHourCount: number;

  mesonRate: number;
  helperRate: number;

  totalMesonHourRate: number;
  totalHelperHourRate: number;

  totalHourPrice: number;

  tipValue: number;

  incrementMesonHour: () => void;
  decrementMesonHour: () => void;
  incrementHelperHour: () => void;
  decrementHelperHour: () => void;

  setMesonRate: (rate: number) => void;
  setHelperRate: (rate: number) => void;

  setHourTipPrice: (value: number) => void;
  resetHourTipPrice: (value: number) => void;
}

export const useHourRateStore = create(
  persist<RateState>(
    (set) => ({
      mesonHourCount: 1,
      helperHourCount: 1,

      mesonRate: 250, // Default values
      helperRate: 200,

      totalMesonHourRate: 250,
      totalHelperHourRate: 200,

      totalHourPrice: 450, // Initial total (meson + helper rates)

      tipValue: 0, // Add a state property for tip

      setHourTipPrice: (value: number) =>
        set((state) => {
          const newTotalHourPrice = state.totalMesonHourRate + state.totalHelperHourRate + value; // Add tip to the total price
          return {
            tipValue: value,
            totalHourPrice: newTotalHourPrice,
          };
        }),

      resetHourTipPrice: () =>
        set((state) => {
          const newTotalHourPrice = state.totalMesonHourRate + state.totalHelperHourRate; // Remove tip from the total price
          return {
            tipValue: 0, // Reset tip value
            totalHourPrice: newTotalHourPrice,
          };
        }),

      setMesonRate: (rate: number) =>
        set((state) => {
          const newTotalMesonHourRate = state.mesonHourCount * rate;
          return {
            mesonRate: rate,
            totalMesonHourRate: newTotalMesonHourRate,
            totalHourPrice: newTotalMesonHourRate + state.totalHelperHourRate,
          };
        }),

      setHelperRate: (rate: number) =>
        set((state) => {
          const newTotalHelperHourRate = state.helperHourCount * rate;
          return {
            helperRate: rate,
            totalHelperHourRate: newTotalHelperHourRate,
            totalHourPrice: state.totalMesonHourRate + newTotalHelperHourRate,
          };
        }),

      incrementMesonHour: () =>
        set((state) => {
          const newMesonHourCount = state.mesonHourCount + 1;
          const newTotalMesonHourRate = newMesonHourCount * state.mesonRate;
          return {
            mesonHourCount: newMesonHourCount,
            totalMesonHourRate: newTotalMesonHourRate,
            totalHourPrice: newTotalMesonHourRate + state.totalHelperHourRate,
          };
        }),

      decrementMesonHour: () =>
        set((state) => {
          const newMesonHourCount = Math.max(1, state.mesonHourCount - 1);
          const newTotalMesonHourRate = newMesonHourCount * state.mesonRate;
          return {
            mesonHourCount: newMesonHourCount,
            totalMesonHourRate: newTotalMesonHourRate,
            totalHourPrice: newTotalMesonHourRate + state.totalHelperHourRate,
          };
        }),

      incrementHelperHour: () =>
        set((state) => {
          const newHelperHourCount = state.helperHourCount + 1;
          const newTotalHelperHourRate = newHelperHourCount * state.helperRate;
          return {
            helperHourCount: newHelperHourCount,
            totalHelperHourRate: newTotalHelperHourRate,
            totalHourPrice: state.totalMesonHourRate + newTotalHelperHourRate,
          };
        }),

      decrementHelperHour: () =>
        set((state) => {
          const newHelperHourCount = Math.max(1, state.helperHourCount - 1);
          const newTotalHelperHourRate = newHelperHourCount * state.helperRate;
          return {
            helperHourCount: newHelperHourCount,
            totalHelperHourRate: newTotalHelperHourRate,
            totalHourPrice: state.totalMesonHourRate + newTotalHelperHourRate,
          };
        }),
    }),
    {
      name: "hour-rate-store", // Key for localStorage
      storage: localStorageProvider, // Use the custom localStorage wrapper
    }
  )
);
