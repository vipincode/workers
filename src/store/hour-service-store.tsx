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
  resetHourState: () => void;
}

const initialState: Omit<
  RateState,
  | "incrementMesonHour"
  | "decrementMesonHour"
  | "incrementHelperHour"
  | "decrementHelperHour"
  | "setMesonRate"
  | "setHelperRate"
  | "setHourTipPrice"
  | "resetHourTipPrice"
  | "resetHourState"
> = {
  mesonHourCount: 1,
  helperHourCount: 1,

  mesonRate: 250,
  helperRate: 200,

  totalMesonHourRate: 250,
  totalHelperHourRate: 200,

  totalHourPrice: 450,

  tipValue: 0,
};

export const useHourRateStore = create(
  persist<RateState>(
    (set) => ({
      ...initialState,

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
      resetHourState: () =>
        set(() => ({
          ...initialState,
        })),
    }),
    {
      name: "hour-rate-store",
      storage: localStorageProvider,
    }
  )
);
