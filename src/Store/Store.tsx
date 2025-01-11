import { create } from "zustand";
import { useUpStore } from "./StoreUps";
interface GoldStore{
    gold: number;
    incrementGold: () => void;
}

export const useGoldStore = create<GoldStore>((set) => ({
    gold: 0,
    incrementGold: () => {
        const isUpsTrue = useUpStore.getState().first_ups; // Acesse o estado de ups
        const isSecondTrue = useUpStore.getState().second_ups;
        const isThridTrue = useUpStore.getState().third_ups;
        const incrementValue = isUpsTrue ? 2 : 1; // Defina o valor do incremento
        const incrementValueTwo = isSecondTrue && incrementValue ? 4: incrementValue;
        const incrementValueThree = incrementValue && isSecondTrue && isThridTrue ? 10 : incrementValueTwo; 
        set((state) => ({
            gold: state.gold + incrementValueThree,
        }));
    },
}));