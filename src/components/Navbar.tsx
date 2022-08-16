import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <div className="nav-container h-8rem bg-green-200 ">
            <div className="flex flex-column">
                <Link to="/home">Home</Link>
                <Link to="/cryptocurrencies">Cryptocurrencies</Link>
                <Link to="/exchanges">Exchanges</Link>
                <Link to="/news">News</Link>
            </div>
        </div>
    );
};
