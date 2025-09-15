import { useState } from "react";
import { fetchCoinData } from "../../services/fetchCoinData";
import { useQuery } from "@tanstack/react-query";

function CoinTable({ currency }) {

    const [page, setPage] = useState(1);

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['coins', page, currency],
        queryFn: () => fetchCoinData(page, currency),
        retry: 2,
        retryDelay: 1000,
        gcTime: 1000 * 60 * 2,
        staleTime: 1000 * 60,
        refetchOnWindowFocus: false
    });

    if (isLoading) {
        return (
            <div>loading data</div>
        )
    };

    if (isError) {
        return (
            <div>Error: {error.message}</div>
        )
    };

    if (data) {
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

}

export default CoinTable;