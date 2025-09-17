import { useState } from "react";
import { fetchCoinData } from "../../services/fetchCoinData";
import { useQuery } from "@tanstack/react-query";
import useCurrencyStore from "../../stores/useCurrencyStore";
import { useNavigate } from "react-router-dom";

function CoinTable() {

    const navigate = useNavigate();

    const { currency } = useCurrencyStore();

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

    function handleCoinRedirect(coinId) {
        navigate(`/details/${coinId}`)
    }

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

    return (
        <>

            <div className="my-5 flex flex-col items-center justify-center gap-5 w-[80vw] mx-auto">

                {/* Table Header */}
                <div className="w-full bg-yellow-400 text-black flex py-4 px-2 font-semibold items-center justify-center">
                    <div className="basis-[35%]">
                        Coin
                    </div>
                    <div className="basis-[25%]">
                        Price
                    </div>
                    <div className="basis-[20%]">
                        24h change
                    </div>
                    <div className="basis-[20%]">
                        Market Cap
                    </div>
                </div>

                {/* Table Body: Maps over the fetched data to render a row for each coin */}
                <div className="flex flex-col w-[80vw] mx-auto">
                    {isLoading && <div>Loading</div>}
                    {data && data.map((coin) => {
                        return (

                            <div key={coin.id} className="w-full bg-transparent text-white flex py-4 px-2 font-semibold items-center justify-between" onClick={() => {
                                handleCoinRedirect(coin.id)
                            }}>

                                <div className="flex items-center justify-start gap-3 basis-[35%]">

                                    <div className="w-[5rem] h-[5rem]">
                                        <img loading="lazy" src={coin.image} className="w-full h-full" />
                                    </div>

                                    <div className="flex flex-col">
                                        <div className="text-3xl">{coin.name}</div>
                                        <div className="text-xl">{coin.symbol}</div>
                                    </div>

                                </div>

                                <div className="basis-[25%]">
                                    {coin.current_price}
                                </div>

                                <div className="basis-[20%]">
                                    {coin.price_change_24h}
                                </div>

                                <div className="basis-[20%]">
                                    {coin.market_cap}
                                </div>

                            </div>

                        )
                    })}
                </div>

                {/* Pagination Controls */}
                <div className="flex gap-4 justify-center items-center">
                    <button
                        onClick={() => { setPage(page - 1) }}
                        className="btn btn-primary btn-wide text-white text-2xl"
                        disabled={page === 1}
                    >
                        Prev
                    </button>
                    <button
                        onClick={() => { setPage(page + 1) }}
                        className="btn btn-secondary btn-wide text-white text-2xl"
                    >
                        Next
                    </button>
                </div>

            </div>

        </>
    )
}

export default CoinTable;