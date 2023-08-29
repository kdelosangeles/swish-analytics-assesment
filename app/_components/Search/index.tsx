"use client";

import { useContext } from "react";
import styles from "./search.module.scss";
import { HomePageContext } from "@/app/_context/HomePageContext";
import { FiX } from "react-icons/fi";

const Search = () => {
    const { searchFilter, setSearchFilter } = useContext(HomePageContext);

    return (
        <header className={styles.search}>
            <h1>Dashboard</h1>
            <input type='text' placeholder='Search by Player or Team' value={searchFilter} onChange={(e) => setSearchFilter(e.target.value)} />
            <button onClick={() => setSearchFilter("")}>
                <FiX />
            </button>
        </header>
    );
};

export default Search;
