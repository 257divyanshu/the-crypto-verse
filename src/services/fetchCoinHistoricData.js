import axiosInstance from "../helpers/axiosInstance";

export async function fetchCoinHistoricData(coinID, interval, days = 7, currency = 'usd'){
    try{
        const response = axiosInstance.get(`/coins/${coinID}/market_chart/?days=${days}&vs_currency=${currency}&interval=${interval}`);
        return response;
    }
    catch(error){
        console.log(error);
        return null;
    };
};