import { create } from "zustand";
import { createSelectors } from "../utils/createSelectors";

type CatStore = {
  cats: {
    bigCats: number;
    smallCats: number;
  };
  increaseBigCats: () => void;
  increaseSmallCats: () => void;
  summaryFunction: () => number;
};

 const useCatStoreBase = create<CatStore>()((set, get) => ({
  cats: {
    bigCats: 0,
    smallCats: 0,
  },
  increaseBigCats: () =>
    set((state) => ({
      cats: {
        ...state.cats,
        bigCats: state.cats.bigCats + 1,
      },
    })),
  increaseSmallCats: () => {
    set((state) => ({
      cats: { ...state.cats, smallCats: state.cats.smallCats + 1 },
    }));
  },
  summaryFunction: () => {
    const total = get().cats.bigCats + get().cats.smallCats;
    return total;
  },
}));

export const useCatStore = createSelectors(useCatStoreBase)