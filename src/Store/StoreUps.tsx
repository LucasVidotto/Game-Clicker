import { create } from "zustand";

interface StoreUps {
    first_ups: boolean;
    second_ups: boolean;
    third_ups: boolean;
    incrementFirstUps: () => void;
    incrementSecondUps: () => void;
    incrementThirdUps: () => void;
    resetUps: () => void; // Adicionado para resetar os estados, se necessário
  }
  
  export const useUpStore = create<StoreUps>((set) => ({
    first_ups: false,
    second_ups: false,
    third_ups: false,
    // Atualiza o estado de first_ups para true
    incrementFirstUps: () =>
      set(() => ({
        first_ups: true,
      })),
  
    // Atualiza o estado de second_ups para true
    incrementSecondUps: () =>
      set(() => ({
        second_ups: true,
      })),

      incrementThirdUps: () =>
        set(() => ({
            third_ups: true,
        })),
  
    // Reseta ambos os estados para false
    resetUps: () =>
      set(() => ({
        first_ups: false,
        second_ups: false,
        third_ups: false,
      })),
  }));