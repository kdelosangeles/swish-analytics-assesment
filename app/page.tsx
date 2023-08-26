import Navigation from "./_components/Navigation";
import Search from "./_components/Search";
import styles from "./page.module.scss";

const Home: React.FC = () => {
    return (
        <main className={styles.main}>
            <Navigation />
            <Search />
        </main>
    );
};

export default Home;
