import { useEffect } from "react";
import { fetchCoinData } from "../../services/fetchCoinData";

function CoinTable(){
    useEffect(()=>{
        fetchCoinData('inr');
    });
    return (
        <div className="bg-sky-300">
            CoinTable Component
        </div>
    )
}
export default CoinTable;