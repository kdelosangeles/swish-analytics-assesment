"use client";

import { useContext, useMemo } from "react";
import { Stat } from "@/app/_types/types";
import DataHeader from "./DataHeader";
import StatLineItem from "./StatLineItem";
import styles from "./statTable.module.scss";
import { HomePageContext } from "@/app/page";

const StatTable = () => {
    const { stats, searchFilter, statFilters, positionFilters, marketSuspendedFilter } = useContext(HomePageContext);

    const filteredStats = useMemo(() => {
        return stats
            .filter((stat: Stat) => {
                // filter by search
                return (
                    stat.playerName.toLowerCase().includes(searchFilter.toLowerCase()) ||
                    stat.teamNickname.toLowerCase().includes(searchFilter.toLowerCase())
                );
            })
            .filter((stat: Stat) => {
                // filter by stat and return all if no stat filters are selected
                return statFilters.length ? statFilters.includes(stat.statType) : true;
            })
            .filter((stat: Stat) => {
                // filter by position and return all if no position filters are selected
                return positionFilters.length ? positionFilters.includes(stat.position.toLowerCase()) : true;
            })
            .filter((stat: Stat) => {
                // returns all if both or neither are selected
                if (!marketSuspendedFilter.length || (marketSuspendedFilter.includes(0) && marketSuspendedFilter.includes(1))) {
                    return true;
                }

                if (marketSuspendedFilter.includes(0)) {
                    return stat.marketSuspended === 0;
                }

                if (marketSuspendedFilter.includes(1)) {
                    return stat.marketSuspended === 1;
                }
            });
    }, [stats, searchFilter, statFilters, positionFilters, marketSuspendedFilter]);

    const renderStats = useMemo(() => {
        return filteredStats.map((stat: Stat) => {
            const key = `${stat.playerId}-${stat.statTypeId}`;
            return <StatLineItem key={key} {...stat} />;
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
