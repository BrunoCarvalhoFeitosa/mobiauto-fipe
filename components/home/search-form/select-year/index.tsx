import React, { ChangeEvent, useEffect } from "react";
import axios from "axios";
import { useBrands } from "@/hooks/use-brands";
import { useModels } from "@/hooks/use-models";
import { useYears } from "@/hooks/use-years";

interface SelectYearProps {
    selectedBrand: string;
    onSelect: (selectedValue: string) => void;
}

export const SelectYear: React.FC<SelectYearProps> = ({ onSelect }) => {
    const { selectedBrand } = useBrands();
    const { selectedModel } = useModels();
    const { addYearsData, addSelectedYear, selectedYear, data } = useYears();

    useEffect(() => {
        if (selectedBrand.codigo && selectedModel.codigo && !selectedYear.codigo) {
          axios.
            get(`${process.env.NEXT_PUBLIC_FIPE_API_BASE_URL}/${selectedBrand.codigo}/modelos/${selectedModel.codigo}/anos/${selectedYear.codigo}`)
            .then((res) => {
              addYearsData(res.data)
            })
            .catch((error) => {
              console.error("Error fetching model data:", error);
            });
        }
    }, [selectedBrand, selectedModel]);
    
    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        onSelect(event.target.value);
        addSelectedYear({
            codigo: event.target.value,
            nome: event.target.options[event.target.selectedIndex].text
        });
    };

    return (
        <select
            value={selectedYear.codigo}
            onChange={handleChange}
            className="xl:min-w-[400px] peer block pt-6 p-2 w-full border rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 cursor-pointer"
        >
            <option disabled value="">Selecione</option>
            {data.map((year) => (
                <option key={year.codigo} value={year.codigo}>
                    {year.nome}
                </option>
            ))}
        </select>
    );
}