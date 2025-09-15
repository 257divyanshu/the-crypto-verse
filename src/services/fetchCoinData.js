import axiosInstance from "../helpers/axiosInstance";

export async function fetchCoinData(currency){
    console.log('making request to',`/coins/markets?vs_currency=${currency}&order=market_cap_desc`);
    try{
        const response = await axiosInstance.get(`/coins/markets?vs_currency=${currency}&order=market_cap_desc`);
        console.log(response);
        console.log(response.data);
        return response.data;
    }
    catch(error){
        console.log(error);
        return null;
    };
}