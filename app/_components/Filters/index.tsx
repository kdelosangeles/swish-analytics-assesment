"use client";

import React, { useCallback, useContext, useMemo, useState } from "react";
import styles from "./filters.module.scss";
import classnames from "classnames";
import { FiChevronDown } from "react-icons/fi";
import { HomePageContext } from "@/app/page";

const Filters = () => {
    const [open, setOpen] = useState(true);
    const { stats, setStatFilters, setPositionFilters, marketSuspendedFilter, setMarketSuspendedFilter } = useContext(HomePageContext);

    const marketSuspendedHandler = (event) => {
        const { name } = event.target;
        const parsedName = parseInt(name);

        setMarketSuspendedFilter((prevFilters: number[]) => {
            // checks if the filter is already in the array and removes it if it is
            return prevFilters.includes(parsedName) ? prevFilters.filter((filter) => filter !== parsedName) : [...prevFilters, parsedName];
        });
    };

    // get all filter options from stats and remove duplicates using a set
    const filterOptions = useMemo(() => {
        return {
            position: [...new Set(stats.map((stat) => stat.position))],
            statType: [...new Set(stats.map((stat) => stat.statType))],
        };
    }, [stats]);

    // a function that takes in a filter type and returns a list of options for that filter type
    const createFilterList = useCallback(
        (filterLabel: string, filterType: string, setFilterFunction: (prevState) => void) => {
            const options = filterOptions[filterType] || [];
            const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
                const { checked, name } = event.target;
                if (checked) {
                    setFilterFunction((prevFilters: string[]) => [...prevFilters, name.toLowerCase()]);
                } else {
                    setFilterFunction((prevFilters: string[]) => prevFilters.filter((filter) => filter !== name.toLowerCase()));
                }
            };

            return (
                <div className={styles.filterList}>
                    <h6>{filterLabel}</h6>
                    <ul>
                        {options.map((option: string) => (
                            <li key={option}>
                                <input type='checkbox' name={option} id={option} onChange={(e) => onChangeHandler(e)} />
                                <label htmlFor={option}>{option}</label>
                            </li>
                        ))}
                    </ul>
                </div>
            );
        },
        [filterOptions]
    );

    // filtered lists for each filter type
    const positions = useMemo(() => createFilterList("Positions", "position", setPositionFilters), [createFilterList, setPositionFilters]);
    const statTypes = useMemo(() => createFilterList("Stats", "statType", setStatFilters), [createFilterList, setStatFilters]);

    return (
        <section className={classnames({ [styles.open]: open }, styles.filters)}>
            <h5 className={styles.sectionLabel} onClick={() => setOpen(!open)}>
                Filters <FiChevronDown />
            </h5>
            {positions}
            {statTypes}
            <div className={styles.filterList}>
                <h6>Market Status</h6>
                <ul>
                    <li>
                        <input type='checkbox' name='0' id='not-suspended' onChange={(e) => marketSuspendedHandler(e)} />
                        <label htmlFor='not-suspended'>Active</label>
                    </li>
                    <li>
                        <input type='checkbox' name='1' id='suspended' onChange={(e) => marketSuspendedHandler(e)} />
                        <label htmlFor='suspended'>Suspended</label>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Filters;
