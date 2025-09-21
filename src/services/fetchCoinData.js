import axiosInstance from "../helpers/axiosInstance";
const apiKey = import.meta.env.VITE_COINGECKO_API_KEY;

export async function fetchCoinData(page, currency){
    let perPage = 10;
    console.log('making request to',`/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=${perPage}&page=${page}&x_cg_demo_api_key=${apiKey}`);
    try{
        const response = await axiosInstance.get(`/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=${perPage}&page=${page}`);
        console.log(response);
        console.log(response.data);
        return response.data;
    }
    catch(error){
        console.log(error);
        return null;
    };
}