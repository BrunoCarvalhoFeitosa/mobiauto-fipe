import { create } from "zustand";
import { Brand } from "@/types";

interface BrandStore {
    data: Brand[];
    selectedBrand: {
        codigo: string;
        nome: string;
    };
    addBrandData: (data: Brand[]) => void;
    addSelectedBrand: (brand: { codigo: string; nome: string }) => void;
}

export const useBrands = create<BrandStore>((set) => ({
    selectedBrand: { codigo: "", nome: "" },
    data: [],
    addBrandData: (data) => set({ data }),
    addSelectedBrand: (selectedBrand) => set({ selectedBrand })
}));