"use client";

import Image from "next/image";
import styles from "./navigation.module.scss";
import { FiGrid } from "react-icons/fi";
import Link from "next/link";
import Filters from "../Filters";

const Navigation: React.FC = () => {
    return (
        <nav className={styles.nav}>
            <Link href='/' className={styles.logo}>
                <Image src='/images/logo.png' alt='swish ball logo' width={100} height={100} />
                <p>Swish Analytics</p>
            </Link>
            <section className={styles.navlinks}>
                <p className={styles.sectionLabel}>Admin</p>
                <Link href='/'>
                    <FiGrid /> Dashboard
                </Link>
            </section>
            <Filters />
        </nav>
    );
};

export default Navigation;
