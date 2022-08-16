import React from "react";
import { Navbar } from "./components/Navbar";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import { Route, Routes } from "react-router";
import { Home } from "./components/Home";
import { Exchanges } from "./components/Exchanges";
import { News } from "./components/News";
import { Cryptocurrencies } from "./components/Cryptocurrencies";

function App() {
    return (
        <div className="App flex ">
            <Navbar />
            <div className="main flex flex-grow-1">
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/exchanges" element={<Exchanges />} />
                    <Route path="/news" element={<News />} />
                    <Route
                        path="/cryptocurrencies"
                        element={<Cryptocurrencies />}
                    />
                </Routes>
            </div>
            <div className="footer"></div>
        </div>
    );
}

export default App;
