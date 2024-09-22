import { create } from "zustand";
import { persist } from "zustand/middleware";

interface RateState {
  mesonDayCount: number;
  helperDayCount: number;
  mesonOvertimeCount: number;
  helperOvertimeCount: number;

  totalMesonDayRate: number;
  totalHelperDayRate: number;
  totalMesonOvertimeRate: number;
  totalHelperOvertimeRate: number;

  totalPrice: number;

  incrementMesonDay: () => void;
  decrementMesonDay: () => void;
  incrementHelperDay: () => void;
  decrementHelperDay: () => void;

  incrementMesonOvertime: () => void;
  decrementMesonOvertime: () => void;
  incrementHelperOvertime: () => void;
  decrementHelperOvertime: () => void;
}

const MESON_RATE = 800;
const HELPER_RATE = 600;
const MESON_OVERTIME_RATE = 150;
const HELPER_OVERTIME_RATE = 150;

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

export const useDayRateStore = create(
  persist<RateState>(
    (set) => ({
      mesonDayCount: 1,
      helperDayCount: 1,
      mesonOvertimeCount: 0, // Initialize to 0
      helperOvertimeCount: 0, // Initialize to 0

      totalMesonDayRate: MESON_RATE,
      totalHelperDayRate: HELPER_RATE,
      totalMesonOvertimeRate: 0, // Start with 0 overtime charges
      totalHelperOvertimeRate: 0, // Start with 0 overtime charges

      totalPrice: MESON_RATE + HELPER_RATE, // No overtime charges initially

      incrementMesonDay: () =>
        set((state) => {
          const newMesonDayCount = state.mesonDayCount + 1;
          const newTotalMesonDayRate = newMesonDayCount * MESON_RATE;
          return {
            mesonDayCount: newMesonDayCount,
            totalMesonDayRate: newTotalMesonDayRate,
            totalPrice:
              newTotalMesonDayRate +
              state.totalHelperDayRate +
              state.totalMesonOvertimeRate +
              state.totalHelperOvertimeRate,
          };
        }),

      decrementMesonDay: () =>
        set((state) => {
          const newMesonDayCount = Math.max(1, state.mesonDayCount - 1);
          const newTotalMesonDayRate = newMesonDayCount * MESON_RATE;
          return {
            mesonDayCount: newMesonDayCount,
            totalMesonDayRate: newTotalMesonDayRate,
            totalPrice:
              newTotalMesonDayRate +
              state.totalHelperDayRate +
              state.totalMesonOvertimeRate +
              state.totalHelperOvertimeRate,
          };
        }),

      incrementHelperDay: () =>
        set((state) => {
          const newHelperDayCount = state.helperDayCount + 1;
          const newTotalHelperDayRate = newHelperDayCount * HELPER_RATE;
          return {
            helperDayCount: newHelperDayCount,
            totalHelperDayRate: newTotalHelperDayRate,
            totalPrice:
              state.totalMesonDayRate +
              newTotalHelperDayRate +
              state.totalMesonOvertimeRate +
              state.totalHelperOvertimeRate,
          };
        }),

      decrementHelperDay: () =>
        set((state) => {
          const newHelperDayCount = Math.max(1, state.helperDayCount - 1);
          const newTotalHelperDayRate = newHelperDayCount * HELPER_RATE;
          return {
            helperDayCount: newHelperDayCount,
            totalHelperDayRate: newTotalHelperDayRate,
            totalPrice:
              state.totalMesonDayRate +
              newTotalHelperDayRate +
              state.totalMesonOvertimeRate +
              state.totalHelperOvertimeRate,
          };
        }),

      incrementMesonOvertime: () =>
        set((state) => {
          const newMesonOvertimeCount = state.mesonOvertimeCount + 1;
          const newTotalMesonOvertimeRate = newMesonOvertimeCount * MESON_OVERTIME_RATE;
          return {
            mesonOvertimeCount: newMesonOvertimeCount,
            totalMesonOvertimeRate: newTotalMesonOvertimeRate,
            totalPrice:
              state.totalMesonDayRate +
              state.totalHelperDayRate +
              newTotalMesonOvertimeRate +
              state.totalHelperOvertimeRate,
          };
        }),

      decrementMesonOvertime: () =>
        set((state) => {
          const newMesonOvertimeCount = Math.max(0, state.mesonOvertimeCount - 1); // Allow overtime count to be 0
          const newTotalMesonOvertimeRate = newMesonOvertimeCount * MESON_OVERTIME_RATE;
          return {
            mesonOvertimeCount: newMesonOvertimeCount,
            totalMesonOvertimeRate: newTotalMesonOvertimeRate,
            totalPrice:
              state.totalMesonDayRate +
              state.totalHelperDayRate +
              newTotalMesonOvertimeRate +
              state.totalHelperOvertimeRate,
          };
        }),

      incrementHelperOvertime: () =>
        set((state) => {
          const newHelperOvertimeCount = state.helperOvertimeCount + 1;
          const newTotalHelperOvertimeRate = newHelperOvertimeCount * HELPER_OVERTIME_RATE;
          return {
            helperOvertimeCount: newHelperOvertimeCount,
            totalHelperOvertimeRate: newTotalHelperOvertimeRate,
            totalPrice:
              state.totalMesonDayRate +
              state.totalHelperDayRate +
              state.totalMesonOvertimeRate +
              newTotalHelperOvertimeRate,
          };
        }),

      decrementHelperOvertime: () =>
        set((state) => {
          const newHelperOvertimeCount = Math.max(0, state.helperOvertimeCount - 1); // Allow overtime count to be 0
          const newTotalHelperOvertimeRate = newHelperOvertimeCount * HELPER_OVERTIME_RATE;
          return {
            helperOvertimeCount: newHelperOvertimeCount,
            totalHelperOvertimeRate: newTotalHelperOvertimeRate,
            totalPrice:
              state.totalMesonDayRate +
              state.totalHelperDayRate +
              state.totalMesonOvertimeRate +
              newTotalHelperOvertimeRate,
          };
        }),
    }),
    {
      name: "day-rate-store", // Key for localStorage
      storage: localStorageProvider, // Use the custom localStorage wrapper
    }
  )
);
