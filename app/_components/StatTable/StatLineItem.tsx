import styles from "./statTable.module.scss";

const StatLineItem: React.FC = () => {
    return (
        <tr className={styles.statLineItem}>
            <td>Russell Westbrook</td>
            <td>Lakers</td>
            <td>PG</td>
            <td>7</td>
            <td>9</td>
            <td>3</td>
            <td>Active</td>
        </tr>
    );
};

export default StatLineItem;

// TODO: add team logo if time
