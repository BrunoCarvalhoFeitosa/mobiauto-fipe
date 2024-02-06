import { create } from "zustand";
import { Result } from "@/types";

interface ResultStore {
    result: Result | null;
    addResultData: (result: Result) => void;
}

export const useResult = create<ResultStore>((set) => ({
    result: null,
    addResultData: (result) => set({ result }),
}));