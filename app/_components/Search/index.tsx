import styles from "./search.module.scss";

const Search: React.FC = () => {
    return (
        <header className={styles.search}>
            <h1>Dashboard</h1>
            <input type='text' placeholder='Search' />
        </header>
    );
};

export default Search;
