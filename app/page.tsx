"use client";

import { createContext, useEffect, useState } from "react";
import Navigation from "./_components/Navigation";
import Search from "./_components/Search";
import StatTable from "./_components/StatTable";
import styles from "./page.module.scss";
import { Stat } from "./_types/types";

interface HomePageContextProps {
    stats: Stat[];
    setStats: any;
    searchFilter: string;
    setSearchFilter: (search: string) => void;
    statFilters: string[];
    setStatFilters: (stats: string[]) => void;
    positionFilters: string[];
    setPositionFilters: (positions: string[]) => void;
    marketSuspendedFilter: number[];
    setMarketSuspendedFilter: any;
}

export const HomePageContext = createContext<HomePageContextProps>({
    stats: [],
    setStats: () => {},
    searchFilter: "",
    setSearchFilter: () => {},
    statFilters: [],
    setStatFilters: () => {},
    positionFilters: [],
    setPositionFilters: () => {},
    marketSuspendedFilter: [],
    setMarketSuspendedFilter: () => {},
});

const Home = () => {
    const [stats, setStats] = useState([]);
    const [searchFilter, setSearchFilter] = useState("");
    const [statFilters, setStatFilters] = useState([]);
    const [positionFilters, setPositionFilters] = useState([]);
    const [marketSuspendedFilter, setMarketSuspendedFilter] = useState([]);

    const contextProps = {
        stats,
        setStats,
        searchFilter,
        setSearchFilter,
        statFilters,
        setStatFilters,
        positionFilters,
        setPositionFilters,
        marketSuspendedFilter,
        setMarketSuspendedFilter,
    };

    useEffect(() => {
        // Simulating client side data fetching
        const fetchStats = async () => {
            try {
                const response = await fetch("http://localhost:3000/api/stats");
                const data = await response.json();
                setStats(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchStats();
    }, []);

    return (
        <HomePageContext.Provider value={contextProps}>
            <main className={styles.main}>
                <Navigation />
                <Search />
                <StatTable />
            </main>
        </HomePageContext.Provider>
    );
};

export default Home;

// TODO: move local host to ENV
