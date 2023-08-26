import DataHeader from "./DataHeader";
import StatLineItem from "./StatLineItem";
import styles from "./statTable.module.scss";

const StatTable: React.FC = () => {
    return (
        <table className={styles.statTable}>
            <DataHeader />
            <tbody className={styles.stats}>
                <StatLineItem />
                <StatLineItem />
                <StatLineItem />
            </tbody>
        </table>
    );
};

export default StatTable;
