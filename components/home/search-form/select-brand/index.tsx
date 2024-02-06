import React, { ChangeEvent, useEffect } from "react";
import axios from "axios";
import { useBrands } from "@/hooks/use-brands";

interface SelectBrandProps {
    onSelect: (selectedValue: string) => void;
}

export const SelectBrand: React.FC<SelectBrandProps> = ({ onSelect }) => {
    const { addBrandData, data, addSelectedBrand, selectedBrand } = useBrands();

    useEffect(() => {
        axios
            .get(`${process.env.NEXT_PUBLIC_FIPE_BRANDS_URL}`)
            .then((res) => {
                addBrandData(res.data);
            })
            .catch((error) => {
                console.error("Error fetching brand data:", error);
            });
    }, []);

    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        onSelect(event.target.value);
        addSelectedBrand({
            codigo: event.target.value,
            nome: event.target.options[event.target.selectedIndex].text
        });
    };

    return (
        <select
            value={selectedBrand.codigo}
            onChange={handleChange}
            className="xl:min-w-[400px] peer block pt-6 focus:ring-0 p-2 w-full border rounded-md hover:ring-offset-0 text-sm disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
        >
            <option disabled value="">Selecione</option>
            {data.map((brand) => (
                <option key={brand.codigo} value={brand.codigo} className="rounded-md">
                    {brand.nome}
                </option>
            ))}
        </select>
    );
}