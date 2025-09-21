import axiosInstance from "../helpers/axiosInstance";
const apiKey = import.meta.env.VITE_COINGECKO_API_KEY;

export async function fetchCoinDetails(id){
    try{
        const response = await axiosInstance.get(`coins/${id}?x_cg_demo_api_key=${apiKey}`)
        return response.data;
    }
    catch(error){
        console.error(error);
        return null;
    }
}