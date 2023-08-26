import styles from "./statTable.module.scss";

const DataHeader: React.FC = () => {
    return (
        <thead>
            <tr className={styles.dataHeader}>
                <th>Name</th>
                <th>Team</th>
                <th>Position</th>
                <th>Points</th>
                <th>Assists</th>
                <th>Rebounds</th>
                <th>Status</th>
            </tr>
        </thead>
    );
};

export default DataHeader;
