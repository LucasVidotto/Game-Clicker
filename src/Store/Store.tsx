import { create } from "zustand";

interface GoldStore{
    gold: number;
    incrementGold: () => void;
}

export const useGoldStore = create<GoldStore>((set) =>({
    gold: 0,
    incrementGold: () =>
        set((state) =>({
            gold: state.gold + 1
        })),

}));