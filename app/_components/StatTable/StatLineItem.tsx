"use client";
import { useContext, useMemo } from "react";
import { Stat } from "@/app/_types/types";
import styles from "./statTable.module.scss";
import { HomePageContext } from "@/app/page";
import { FiInfo } from "react-icons/fi";

interface Props extends Stat {
    highLine?: number;
    lowLine?: number;
    shouldBeSuspended?: number;
}

const StatLineItem = (props: Props) => {
    const { setStats } = useContext(HomePageContext);
    const { playerName, teamNickname, position, statType, line, marketSuspended, shouldBeSuspended, highLine, lowLine } = props;

    const displaySuspensionNotification = useMemo(() => {
        return marketSuspended !== shouldBeSuspended;
    }, [marketSuspended, shouldBeSuspended]);

    const onChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target;

        setStats((prevStats: Stat[]) => {
            // find the index of the stat to update
            const indextoUpdate = prevStats.findIndex((stat: Stat) => stat.playerName === playerName && stat.statType === statType);

            // update the suspension status of the stat
            const newStats = [...prevStats];
            newStats[indextoUpdate].marketSuspended = Number(value);
            return newStats;
        });
    };

    return (
        <>
            <tr className={styles.statLineItem}>
                <td>{playerName}</td>
                <td>{teamNickname}</td>
                <td>{position}</td>
                <td>{statType}</td>
                <td>{line}</td>
                <td>{lowLine}</td>
                <td>{highLine}</td>
                <td className={styles.suspensionContainer}>
                    {displaySuspensionNotification && <FiInfo className={styles.suspensionAlert} />}
                    <select name='suspension' value={marketSuspended} className={styles.suspensionMenu} onChange={onChangeHandler}>
                        <option value={0}>Active</option>
                        <option value={1}>Suspended</option>
                    </select>
                </td>
            </tr>
        </>
    );
};

export default StatLineItem;

// TODO: add team logo if time
