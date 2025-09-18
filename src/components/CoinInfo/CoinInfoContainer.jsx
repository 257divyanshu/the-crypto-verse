import PageLoader from "../PageLoader/PageLoader";
import Alert from "../Alert/Alert";
import CoinInfo from "./CoinInfo";
import { useFetchCoinHistory } from "../../hooks/useFetchCoinHistory";

function CoinInfoContainer({coinID}){

    const [historicData, isLoading, isError, setDays, setDataInterval, days, currency] = useFetchCoinHistory(coinID);

    if(isLoading){
        return (
            <PageLoader/>
        )
    };

    if(isError){
        return (
            <Alert message={'Error fetching data'} type={'error'}/>
        )
    };

    return (
        <CoinInfo
            historicData={historicData}
            setDays={setDays}
            setDataInterval={setDataInterval}
            days={days}
            currency={currency}
        />
    )

}
export default CoinInfoContainer;