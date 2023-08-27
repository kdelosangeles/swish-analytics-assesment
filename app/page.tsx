"use client";

import { createContext, useEffect, useState } from "react";
import Navigation from "./_components/Navigation";
import Search from "./_components/Search";
import StatTable from "./_components/StatTable";
import styles from "./page.module.scss";
import { Stat } from "./_types/types";

interface HomePageContextProps {
    stats: Stat[];
}

export const HomePageContext = createContext<HomePageContextProps>({ stats: [] });

const Home = () => {
    const [stats, setStats] = useState([]);

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
        <HomePageContext.Provider value={{ stats }}>
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
