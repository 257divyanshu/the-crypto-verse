import {Route, Routes, } from "react-router-dom";
import Layout from "../../pages/Layout";
import { lazy } from "react";
// import Home from "../../pages/Home";
// import CoinDetails from "../../pages/CoinDetails";
const Home = lazy(()=>import('../../pages/Home'));
const CoinDetails = lazy(()=>import('../../pages/CoinDetails'));

function Routing(){
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>} />
                <Route path="/details/:coinId" element={<CoinDetails/>} />
            </Route>
        </Routes>
    )
}
export default Routing;