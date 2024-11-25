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
  tipValue: number;

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
  resetDayTipPrice: (value: number) => void;
  resetDayState: () => void;
}

const initialState = {
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

  tipValue: 0,
};
export const useDayRateStore = create(
  persist<RateState>(
    (set) => ({
      ...initialState,

      setTipPrice: (value: number) =>
        set((state) => {
          const newTotalDayPrice =
            state.totalMesonDayRate +
            state.totalHelperDayRate +
            state.totalMesonOvertimeRate +
            state.totalHelperOvertimeRate +
            value; // Add the tip value to the total price
          return {
            tipValue: value,
            totalDayPrice: newTotalDayPrice,
          };
        }),

      resetDayTipPrice: () =>
        set((state) => {
          const newTotalDayPrice =
            state.totalMesonDayRate +
            state.totalHelperDayRate +
            state.totalMesonOvertimeRate +
            state.totalHelperOvertimeRate; // Exclude the tip value
          return {
            tipValue: 0, // Reset the tip value to 0
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

      resetDayState: () =>
        set(() => ({
          ...initialState,
        })),
    }),
    {
      name: "day-rate-store", // Key for localStorage
      storage: localStorageProvider,
    }
  )
);
