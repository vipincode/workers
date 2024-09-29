import { create } from "zustand";

interface ModeStore {
  mode: "day" | "hour";
  setMode: (selectedMode: "day" | "hour") => void;
}

const useModeStore = create<ModeStore>((set) => ({
  mode: "day",
  setMode: (selectedMode) => set({ mode: selectedMode }),
}));

export default useModeStore;
