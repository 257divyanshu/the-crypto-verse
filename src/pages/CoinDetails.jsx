import { useParams } from "react-router-dom";

function CoinDetails(){

    const {coinId} = useParams();

    return (
        <div>
            Coin Details for coin ID {coinId}
        </div>
    )
}
export default CoinDetails;