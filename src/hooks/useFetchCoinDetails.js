import { useParams } from "react-router-dom";
import useCurrencyStore from "../stores/useCurrencyStore";
import { useQuery } from "@tanstack/react-query";
import { fetchCoinDetails } from "../services/fetchCoinDetails";

export function useFetchCoinDetails(){
    const {coinId} = useParams();

    const {currency} = useCurrencyStore();

    const {data: coin, isLoading, isError, error} = useQuery({
        queryKey: ['coins', coinId],
        queryFn: () => fetchCoinDetails(coinId),
        retry: 2,
        retryDelay: 1000,
        gcTime: 1000 * 60 * 2,
        staleTime: 1000 * 60 * 2,
        refetchOnWindowFocus: false,
    });

    return [
        coinId,
        coin,
        isLoading,
        isError,
        error,
        currency
    ]
}