import React, { ChangeEvent, useEffect } from "react";
import axios from "axios";
import { useBrands } from "@/hooks/use-brands";
import { useModels } from "@/hooks/use-models";

interface SelectModelProps {
    selectedBrand: string;
    onSelect: (selectedValue: string) => void;
}

export const SelectModel: React.FC<SelectModelProps> = ({ onSelect }) => {
    const { selectedBrand } = useBrands();
    const { addModelsData, addSelectedModel, selectedModel, data } = useModels();

    useEffect(() => {
        if (selectedBrand.codigo) {
            axios
                .get(`${process.env.NEXT_PUBLIC_FIPE_BRANDS_URL}/${selectedBrand.codigo}/modelos`)
                .then((res) => {
                    addModelsData(res.data.modelos);
                })
                .catch((error) => {
                    console.error("Error fetching model data:", error);
                });
            }
    }, [selectedBrand.codigo]);

    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        onSelect(event.target.value);
        addSelectedModel({
            codigo: event.target.value,
            nome: event.target.options[event.target.selectedIndex].text
        });
    };

    return (
        <select
            value={selectedModel.codigo}
            onChange={handleChange}
            className="xl:min-w-[400px] peer block pt-6 p-2 w-full border rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 cursor-pointer"
        >
            <option disabled value="">Selecione</option>
            {data.map((model) => (
                <option key={model.codigo} value={model.codigo}>
                    {model.nome}
                </option>
            ))}
        </select>
    );
}