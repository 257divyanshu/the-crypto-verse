import axios from "axios";
import { COINGECKO_API } from "./constants";

const axiosInstance = axios.create({
    baseURL: COINGECKO_API,
});

export default axiosInstance;