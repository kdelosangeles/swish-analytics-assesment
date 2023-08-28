"use client";
import { Stat } from "@/app/_types/types";
import styles from "./statTable.module.scss";

interface Props extends Stat {
    highLine?: number;
    lowLine?: number;
}

const StatLineItem = (props: Props) => {
    const { playerName, teamNickname, position, statType, line, marketSuspended, highLine, lowLine } = props;

    return (
        <tr className={styles.statLineItem}>
            <td>{playerName}</td>
            <td>{teamNickname}</td>
            <td>{position}</td>
            <td>{statType}</td>
            <td>{line}</td>
            <td>{lowLine}</td>
            <td>{highLine}</td>
            <td>{marketSuspended ? "Suspended" : "Active"}</td>
        </tr>
    );
};

export default StatLineItem;

// TODO: add team logo if time
