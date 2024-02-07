"use client"
import { useEffect, Suspense } from "react";
import Link from "next/link";
import axios from "axios";
import { useResult } from "@/hooks/use-result";
import { Loader2Icon, SearchIcon } from "lucide-react";
import { useSearchParams } from "next/navigation";

type FetchDataProps = {
    brandCode: string | null;
    modelCode: string | null;
    yearCode: string | null;
    addResultData: (data: any) => void;
};

const fetchData = ({ brandCode, modelCode, yearCode, addResultData }: FetchDataProps) => {
    if (brandCode && modelCode && yearCode) {
        axios
            .get(`${process.env.NEXT_PUBLIC_FIPE_API_BASE_URL}/${brandCode}/modelos/${modelCode}/anos/${yearCode}`)
            .then((res) => {
                addResultData(res.data);
            })
            .catch((error) => {
                console.error("Erro ao buscar os dados:", error);
            });
    }
};

export const ResultCard = () => {
    const { addResultData, result } = useResult();

    return (
        <Suspense fallback={<div>Carregando...</div>}>
            <ResultContent addResultData={addResultData} result={result} />
        </Suspense>
    );
};

const ResultContent = (
    { addResultData, result }: { addResultData: (data: any) => void; result: any }
) => {
    const params = useSearchParams();
    const brandCode = params.get("brandCode");
    const brandName = params.get("brandName");
    const modelCode = params.get("modelCode");
    const modelName = params.get("modelName");
    const yearCode = params.get("yearCode");
    const yearName = params.get("yearName");

    useEffect(() => {
        fetchData({ brandCode, modelCode, yearCode, addResultData });
    }, [params, addResultData]);

    if (!brandCode || !modelCode || !yearCode) {
        return (
            <div className="w-full bg-green-200">
                <div className="py-12 mx-auto w-[90%] xl:w-[50%]">
                    <h1 className="text-2xl font-bold text-center">
                        Não há resultados.
                    </h1>
                    <p className="text-sm text-center">
                        Você não buscou por nenhum veículo ainda, por isso não temos resultados.
                    </p>
                    <div className="mt-5 mb-4 mx-auto w-[300px] h-[60px] flex justify-center items-center rounded-full bg-emerald-500 text-sm font-bold text-white">
                        <Link href="/" className="w-full h-full flex justify-center items-center">
                            Busque por um veículo agora.
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
    
    return (
        <div className="w-full pb-6 bg-green-200">
            <div className="py-2 pl-6">
                <Link href="/" className="group relative flex items-end gap-x-2 outline-none w-[230px]">
                    <SearchIcon className="w-6 h-6" />
                    <span className="text-base font-bold">
                        Pesquisar outro veículo.
                    </span>
                    <div className="absolute -bottom-1 w-[0] group-hover:w-full h-[2px] bg-black transition-all duration-500" />
                </Link>
            </div>
            <div className="py-12 mx-auto w-[90%] xl:w-[50%]">
                <h1 className="text-2xl font-bold text-center">
                    Tabela Fipe: Preço {brandName} {modelName} {yearName} 
                </h1>
                {result?.Valor ? (
                    <>
                        <div className="p-4 mt-5 mb-4 mx-auto w-fit rounded-full bg-emerald-500 text-xl font-bold text-white">
                            {result?.Valor}
                        </div>
                        <p className="text-sm text-center">
                            Este é o preço de compra do veículo.
                        </p>
                    </>
                ) : (
                    <div className="mt-6 md:mt-12 flex justify-center">
                        <Loader2Icon className="w-7 h-7 animate-spin" />
                    </div>
                )}
            </div>
        </div>
    );
};
