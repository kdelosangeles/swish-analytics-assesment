"use client";

import styles from "./search.module.scss";

const Search = () => {
    return (
        <header className={styles.search}>
            <h1>Dashboard</h1>
            <input type='text' placeholder='Search' />
        </header>
    );
};

export default Search;
