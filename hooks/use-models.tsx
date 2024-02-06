import { create } from "zustand";
import { Model } from "@/types";

interface ModelStore {
    data: Model[];
    selectedModel: {
        codigo: string;
        nome: string;
    };
    addModelsData: (data: Model[]) => void;
    addSelectedModel: (brand: { codigo: string; nome: string }) => void;
}

export const useModels = create<ModelStore>((set) => ({
    selectedModel: { codigo: "", nome: "" },
    data: [],
    addModelsData: (data) => set({ data }),
    addSelectedModel: (selectedModel) => set({ selectedModel }),
}));