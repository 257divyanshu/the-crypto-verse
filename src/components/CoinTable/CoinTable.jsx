import { useEffect, useState } from "react";
import { fetchCoinData } from "../../services/fetchCoinData";

function CoinTable({ currency }) {
    const [page, setPage] = useState(1);
    useEffect(() => {
        fetchCoinData(page, currency);
    }, [page, currency]);
    return (
        <>
            <div className="bg-sky-300">
                CoinTable Component
            </div>
            <div>
                <button
                    onClick={() => { setPage(page + 1) }}
                >
                    Click
                </button>
            </div>
            <div>
                page no {page}
            </div>
        </>
    )
}
export default CoinTable;