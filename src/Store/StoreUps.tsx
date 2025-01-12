import { create } from "zustand";

interface StoreUps {
    first_ups: boolean;
    second_ups: boolean;
    third_ups: boolean;
    total_ups: number;
    incrementFirstUps: () => void;
    incrementSecondUps: () => void;
    incrementThirdUps: () => void;

    resetUps: () => void; // Adicionado para resetar os estados, se necessário
  }
  
  export const useUpStore = create<StoreUps>((set) => ({
    first_ups: false,
    second_ups: false,
    third_ups: false,
    total_ups: 0,
    // Atualiza o estado de first_ups para true
    incrementFirstUps: () =>
      set(() => ({
        first_ups: true,
        total_ups: 1,
      })),
  
    // Atualiza o estado de second_ups para true
    incrementSecondUps: () =>
      set(() => ({
        second_ups: true,
        total_ups: 2,
      })),

      incrementThirdUps: () =>
        set(() => ({
            third_ups: true,
            total_ups: 3,
        })),

    // Reseta ambos os estados para false
    resetUps: () =>
      set(() => ({
        first_ups: false,
        second_ups: false,
        third_ups: false,
        total_ups: 0,
      })),
  }));