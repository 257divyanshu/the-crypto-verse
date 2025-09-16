import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import CoinTable from "./components/CoinTable/CoinTable";
import { useState } from "react";

function App() {

  let [currency, setCurrency] = useState('inr');

  return (
    <>
      <Navbar setCurrency={setCurrency}/>
      <Banner/>
      <CoinTable currency={currency}/>
    </>
  )   
}
export default App;