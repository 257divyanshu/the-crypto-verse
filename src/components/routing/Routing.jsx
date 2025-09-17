import {Route, Routes, } from "react-router-dom";
import Layout from "../../pages/Layout";
import { lazy, Suspense } from "react";
import PageLoader from "../PageLoader/PageLoader";
// import Home from "../../pages/Home";
// import CoinDetails from "../../pages/CoinDetails";
const Home = lazy(()=>import('../../pages/Home'));
const CoinDetails = lazy(()=>import('../../pages/CoinDetails'));

function Routing(){
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={
                    <Suspense fallback={<PageLoader/>}>
                        <Home/>
                    </Suspense>
                } />
                <Route path="/details/:coinId" element={
                    <Suspense fallback={<PageLoader/>}>
                        <CoinDetails/>
                    </Suspense>
                } />
            </Route>
        </Routes>
    )
}
export default Routing;