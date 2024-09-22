import { create } from "zustand";
import { persist } from "zustand/middleware";

interface RateState {
  mesonHourCount: number;
  helperHourCount: number;

  totalMesonHourRate: number;
  totalHelperHourRate: number;

  totalHourPrice: number;

  incrementMesonHour: () => void;
  decrementMesonHour: () => void;
  incrementHelperHour: () => void;
  decrementHelperHour: () => void;
}

const MESON_RATE = 250;
const HELPER_RATE = 200;

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

export const useHourRateStore = create(
  persist<RateState>(
    (set) => ({
      mesonHourCount: 1,
      helperHourCount: 1,

      totalMesonHourRate: MESON_RATE,
      totalHelperHourRate: HELPER_RATE,

      totalHourPrice: MESON_RATE + HELPER_RATE, // Initial price

      incrementMesonHour: () =>
        set((state) => {
          const newMesonHourCount = state.mesonHourCount + 1;
          const newTotalMesonHourRate = newMesonHourCount * MESON_RATE;
          return {
            mesonHourCount: newMesonHourCount,
            totalMesonHourRate: newTotalMesonHourRate,
            totalHourPrice: newTotalMesonHourRate + state.totalHelperHourRate,
          };
        }),

      decrementMesonHour: () =>
        set((state) => {
          const newMesonHourCount = Math.max(1, state.mesonHourCount - 1);
          const newTotalMesonHourRate = newMesonHourCount * MESON_RATE;
          return {
            mesonHourCount: newMesonHourCount,
            totalMesonHourRate: newTotalMesonHourRate,
            totalHourPrice: newTotalMesonHourRate + state.totalHelperHourRate,
          };
        }),

      incrementHelperHour: () =>
        set((state) => {
          const newHelperHourCount = state.helperHourCount + 1;
          const newTotalHelperHourRate = newHelperHourCount * HELPER_RATE;
          return {
            helperHourCount: newHelperHourCount,
            totalHelperHourRate: newTotalHelperHourRate,
            totalHourPrice: state.totalMesonHourRate + newTotalHelperHourRate,
          };
        }),

      decrementHelperHour: () =>
        set((state) => {
          const newHelperHourCount = Math.max(1, state.helperHourCount - 1);
          const newTotalHelperHourRate = newHelperHourCount * HELPER_RATE;
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
