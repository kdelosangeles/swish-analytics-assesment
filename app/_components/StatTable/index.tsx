"use client";

import { useContext, useMemo } from "react";
import { Stat } from "@/app/_types/types";
import DataHeader from "./DataHeader";
import StatLineItem from "./StatLineItem";
import styles from "./statTable.module.scss";
import { HomePageContext } from "@/app/page";

const StatTable = () => {
    const { stats, search } = useContext(HomePageContext);

    const filteredStats = useMemo(() => {
        return stats.filter((stat: Stat) => {
            return stat.playerName.toLowerCase().includes(search.toLowerCase()) || stat.teamNickname.toLowerCase().includes(search.toLowerCase());
        });
    }, [stats, search]);

    const renderStats = useMemo(() => {
        return filteredStats.map((stat: Stat, index: number) => {
            return <StatLineItem key={index} {...stat} />;
        });
    }, [filteredStats]);

    return (
        <table className={styles.statTable}>
            <DataHeader />
            <tbody className={styles.stats}>{renderStats}</tbody>
        </table>
    );
};

export default StatTable;

// TODO: use a better key value
