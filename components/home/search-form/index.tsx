"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useBrands } from "@/hooks/use-brands";
import { useModels } from "@/hooks/use-models";
import { useYears } from "@/hooks/use-years";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { SelectBrand } from "@/components/home/search-form/select-brand";
import { SelectModel } from "@/components/home/search-form/select-model";
import { SelectYear } from "@/components/home/search-form/select-year";

const formSchema = z.object({
    brand: z.string().min(1, {
        message: "Por favor, selecione uma marca.",
    }),
    model: z.string().min(1, {
        message: "Por favor, selecione um modelo.",
    }),
    year: z.string().min(1, {
        message: "Por favor, selecione um ano.",
    }),
});

export const SearchForm: React.FC = () => {
    const { selectedBrand } = useBrands();
    const { selectedModel } = useModels();
    const { selectedYear } = useYears();

    const disabled = !selectedBrand.codigo || !selectedModel.codigo || !selectedYear.codigo;

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            brand: "",
            model: "",
            year: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            if (values.brand && values.model && values.year) {
                form.reset({brand: "", model: "", year: ""});
                const url = `/result?brandName=${selectedBrand.nome}&brandCode=${selectedBrand.codigo}&modelName=${selectedModel.nome}&modelCode=${selectedModel.codigo}&yearName=${selectedYear.nome}&yearCode=${selectedYear.codigo}`;
                window.location.assign(url);
            }
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    return (
        <div className="flex flex-col justify-center items-center h-full">
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-center">
                    Tabela Fipe
                </h1>
                <p className="mx-auto w-[70%] md:w-full text-base font-semibold text-center">
                    Consulte o valor de um veículo de forma gratuita.
                </p>
            </div>
            <div className="mx-auto py-10 px-8 w-[90%] md:w-[80%] xl:w-[50%] bg-white rounded-md shadow-md">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="brand"
                            render={({ field }) => (
                                <FormItem className="relative">
                                    <FormLabel className="absolute top-[10px] left-[14px] text-muted-foreground">
                                        Marca
                                    </FormLabel>
                                    <FormControl>
                                        <SelectBrand
                                            onSelect={(selectedValue: any) => form.setValue("brand", selectedValue)}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="model"
                            render={({ field }) => (
                                <FormItem className="relative">
                                    <FormLabel className="absolute top-[10px] left-[14px] text-muted-foreground">
                                        Modelo
                                    </FormLabel>
                                    <FormControl>
                                        <SelectModel
                                            selectedBrand={field.value}
                                            onSelect={(selectedValue: any) => form.setValue("model", selectedValue)}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        {selectedBrand.codigo && selectedModel.codigo && (
                            <FormField
                                control={form.control}
                                name="year"
                                render={({ field }) => (
                                    <FormItem className="relative">
                                        <FormLabel className="absolute top-[10px] left-[14px] text-muted-foreground">
                                            Ano
                                        </FormLabel>
                                        <FormControl>
                                            <SelectYear
                                                selectedBrand={field.value}
                                                onSelect={(selectedValue: any) => form.setValue("year", selectedValue)}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        )}
                        <div className="w-full flex justify-center">
                            <Button
                                type="submit"
                                disabled={disabled}
                                className="disabled:bg-gray-500 disabled:text-black bg-purple-700 hover:bg-purple-600 transition-all duration-300"
                            >
                                Consultar preço
                            </Button>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    );
}