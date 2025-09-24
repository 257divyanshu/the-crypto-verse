import { useEffect } from "react";
// import parse from "html-react-parser";
import PageLoader from "../components/PageLoader/PageLoader";
import CoinInfoContainer from "../components/CoinInfo/CoinInfoContainer";
import { useFetchCoinDetails } from "../hooks/useFetchCoinDetails";

function CoinDetails() {

    const [coinId, coin, isLoading, isError, error, currency] = useFetchCoinDetails();

    useEffect(() => {
        console.log(coin);
    }, [coin]);

    if (isLoading) {
        return (
            <PageLoader />
        )
    };

    if (isError) {
        return <div>Error : {error.message}</div>
    };

    return (
        <>
            <div className="flex flex-col gap-2 border-2 border-white p-2">

                <div
                    className="flex flex-row justify-around gap-4 items-center mt-6 border-r-2 border-2 border-white p-2"
                >

                    <div className="flex flex-row gap-2 justify-center">

                        <div className="w-32 h-32">
                            <img
                                alt={coin?.name}
                                src={coin?.image?.large}
                                className="w-full h-full border-2 border-white p-2"
                            />
                        </div>
                        <h1
                            className="text-2xl font-bold border-2 border-white flex justify-center items-center p-1"
                        >
                            {coin?.name}
                        </h1>
                    </div>

                    {/* <div
                        className="w-full flex flex-row justify-around border-2 border-white p-2"
                    > */}
                    <div
                        className="flex flex-col mb-4 md:mb-0 border-2 border-white p-2"
                    >
                        <h2
                            className="text-l font-bold border-2 border-white p-2"
                        >
                            Current Price
                        </h2>
                        <span
                            className="text-2xl font-bold border-2 border-white p-2"
                        >
                            {coin?.market_data.current_price[currency]}
                        </span>
                    </div>
                    <div
                        className="flex flex-col mb-4 md:mb-0 border-2 border-white p-2"
                    >
                        <h2
                            className="text-l font-bold border-2 border-white p-2"
                        >
                            24h Change
                        </h2>
                        <span
                            className={`text-2xl font-bold border-2 border-white p-2 ${coin?.market_data.price_change_24h_in_currency[currency] >= 0 ? 'text-green-500' : 'text-red-500'}`}
                        >
                            {coin?.market_data.price_change_24h_in_currency[currency]}
                        </span>
                    </div>
                    <div
                        className="flex flex-col mb-4 md:mb-0 border-2 border-white p-2"
                    >
                        <h2
                            className="text-l font-bold border-2 border-white p-2"
                        >
                            24h High
                        </h2>
                        <span
                            className="text-2xl font-bold border-2 border-white p-2"
                        >
                            {coin?.market_data.high_24h[currency]}
                        </span>
                    </div>
                    <div
                        className="flex flex-col mb-4 md:mb-0 border-2 border-white p-2"
                    >
                        <h2
                            className="text-l font-bold border-2 border-white p-2"
                        >
                            24h Low
                        </h2>
                        <span
                            className="text-2xl font-bold border-2 border-white p-2"
                        >
                            {coin?.market_data.low_24h[currency]}
                        </span>
                    </div>
                    <div
                        className="flex flex-col mb-4 md:mb-0 border-2 border-white p-2"
                    >
                        <h2
                            className="text-l font-bold border-2 border-white p-2"
                        >
                            Volume
                        </h2>
                        <span
                            className="text-2xl font-bold border-2 border-white p-2"
                        >
                            {coin?.market_data.total_volume[currency]}
                        </span>
                    </div>
                    {/* </div> */}

                </div>

                <div className="w-full border-2 border-white p-2">
                    <CoinInfoContainer coinID={coinId} />
                </div>

            </div>
        </>
    )

}
export default CoinDetails;