import React from "react";
import { Row } from "./Row";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { millify } from "millify";

export const Home = () => {
    const { data, isFetching } = useGetCryptosQuery();
    const globalStats = data?.data?.stats;
    if (isFetching) return <div>{"Loading ... "}</div>;
    return (
        <div>
            <div>{"Global crypto stats"}</div>
            <div className="flex flex-wrap">
                <Row
                    label={"Total cryptocurrencies"}
                    number={globalStats.total}
                />
                <Row
                    label={"Total Market Cap"}
                    number={millify(globalStats.totalCoins)}
                />
                <Row
                    label={"Total Markets"}
                    number={millify(globalStats.totalMarkets)}
                />
                <Row
                    label={"Total Exchanges"}
                    number={millify(globalStats.totalExchanges)}
                />
                <Row
                    label={"Total 24h Volume"}
                    number={millify(globalStats.total24hVolume)}
                />
            </div>
        </div>
    );
};
