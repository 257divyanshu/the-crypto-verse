import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import CoinTable from "./components/CoinTable/CoinTable";

function App() {
  return (
    <>
      <Navbar/>
      <Banner/>
      <CoinTable currency='usd'/>
    </>
  )   
}
export default App;