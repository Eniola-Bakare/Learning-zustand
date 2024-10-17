import { create } from "zustand";
import { persist } from "zustand/middleware";

type ZustandBear = {
  bear: number;
  increaseBearCount: () => void;
  decreaseBearCount: () => void;
  removeAllBear: () => void;
};

export const useZustandStore = create<ZustandBear>(
  persist(
    (set) => ({
      bear: 0,
      increaseBearCount: () => set((state) => ({ bear: state.bear + 1 })),
      decreaseBearCount: () => set((state) => ({ bear: state.bear - 1 })),
      removeAllBear: () => set(() => ({ bear: 0 })),
    }),
    {
      name: "Bear Store",
    }
  )
);
