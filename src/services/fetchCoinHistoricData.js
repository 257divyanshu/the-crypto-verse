import axiosInstance from "../helpers/axiosInstance";
const apiKey = import.meta.env.VITE_COINGECKO_API_KEY;

export async function fetchCoinHistoricData(coinID, interval, days = 7, currency = 'usd'){
    try{
        const response = axiosInstance.get(`/coins/${coinID}/market_chart/?days=${days}&vs_currency=${currency}&interval=${interval}&x_cg_demo_api_key=${apiKey}`);
        return response;
    }
    catch(error){
        console.log(error);
        return null;
    };
};