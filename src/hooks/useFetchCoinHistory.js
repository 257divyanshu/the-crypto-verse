import { useState } from "react";
import useCurrencyStore from "../stores/useCurrencyStore";
import { useQuery } from "@tanstack/react-query";
import { fetchCoinHistoricData } from "../services/fetchCoinHistoricData";

export function useFetchCoinHistory(coinID){
    const {currency} = useCurrencyStore();

    const [days, setDays] = useState(7);
    const [dataInterval, setDataInterval] = useState('daily');

    const {data : historicData, isLoading, isError} = useQuery({
        queryKey: ['coinHistoricData',  coinID, dataInterval, days, currency],
        queryFn: () => fetchCoinHistoricData(coinID, dataInterval, days, currency),
        retry: 2,
        retryDelay: 1000,
        gcTime: 1000 * 60 * 2,
        staleTime: 1000 * 60 * 2,
        refetchOnWindowFocus: false
    });

    return [
        historicData,
        isLoading,
        isError,
        setDays,
        setDataInterval,
        days,
        currency
    ];
}