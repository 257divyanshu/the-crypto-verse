import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import useCurrencyStore from "../../stores/useCurrencyStore";
import { fetchCoinHistoricData } from "../../services/fetchCoinHistoricData";
import PageLoader from "../PageLoader/PageLoader";
import Alert from "../Alert/Alert";
import CoinInfo from "./CoinInfo";

function CoinInfoContainer({coinID}){

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

    if(isLoading){
        return (
            <PageLoader/>
        )
    };

    if(isError){
        return (
            <Alert message={'Error fetching data'} type={'error'}/>
        )
    };

    return (
        <CoinInfo
            historicData={historicData}
            setDays={setDays}
            setDataInterval={setDataInterval}
            days={days}
            currency={currency}
        />
    )

}
export default CoinInfoContainer;