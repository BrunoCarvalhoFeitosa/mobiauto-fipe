import { create } from "zustand";
import { Year } from "@/types";

interface YearStore {
    data: Year[];
    selectedYear: {
        codigo: string;
        nome: string;
    };
    addYearsData: (data: Year[]) => void;
    addSelectedYear: (brand: { codigo: string; nome: string }) => void;
}

export const useYears = create<YearStore>((set) => ({
    selectedYear: { codigo: "", nome: "" },
    data: [],
    addYearsData: (data) => set({ data }),
    addSelectedYear: (selectedYear) => set({ selectedYear }),
}));