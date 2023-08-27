"use client";

import { useContext } from "react";
import styles from "./search.module.scss";
import { HomePageContext } from "@/app/page";
import { FiX } from "react-icons/fi";

const Search = () => {
    const { search, setSearch } = useContext(HomePageContext);

    return (
        <header className={styles.search}>
            <h1>Dashboard</h1>
            <input type='text' placeholder='Search by Player or Team' value={search} onChange={(e) => setSearch(e.target.value)} />
            <button onClick={() => setSearch("")}>
                <FiX />
            </button>
        </header>
    );
};

export default Search;
