"use client";

import styles from "./statTable.module.scss";

const DataHeader = () => {
    return (
        <thead>
            <tr className={styles.dataHeader}>
                <th>Name</th>
                <th>Team</th>
                <th>Position</th>
                <th>Stat</th>
                <th>Optimal</th>
                <th>High</th>
                <th>Low</th>
                <th>Status</th>
            </tr>
        </thead>
    );
};

export default DataHeader;
