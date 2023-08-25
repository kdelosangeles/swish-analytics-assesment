"use client";
import { useState } from "react";
import styles from "./filters.module.scss";
import classnames from "classnames";
import { FiChevronDown } from "react-icons/fi";

const Filters = () => {
    const [open, setOpen] = useState(true);
    const toggleOpen = () => setOpen(!open);

    return (
        <section className={classnames({ [styles.open]: open }, styles.filters)}>
            <h5 className={styles.sectionLabel} onClick={toggleOpen}>
                Filters <FiChevronDown />
            </h5>

            <div className={styles.filterList}>
                <h6>Position</h6>
                <ul>
                    <li>
                        <input type='checkbox' name='test' id='test'></input>
                        <label htmlFor='test'>test</label>
                    </li>
                    <li>
                        <input type='checkbox' name='test' id='test'></input>
                        <label htmlFor='test'>test</label>
                    </li>
                    <li>
                        <input type='checkbox' name='test' id='test'></input>
                        <label htmlFor='test'>test</label>
                    </li>
                </ul>
            </div>
            <div className={styles.filterList}>
                <h6>Position</h6>
                <ul>
                    <li>
                        <input type='checkbox' name='test' id='test'></input>
                        <label htmlFor='test'>test</label>
                    </li>
                    <li>
                        <input type='checkbox' name='test' id='test'></input>
                        <label htmlFor='test'>test</label>
                    </li>
                </ul>
            </div>
            <div className={styles.filterList}>
                <h6>Position</h6>
                <ul>
                    <li>
                        <input type='checkbox' name='test' id='test'></input>
                        <label htmlFor='test'>test</label>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Filters;
