import React from "react";
import styles from "./header.module.scss";

const Header = ({header}) => (
    <div className={styles.header}>
        <a className={styles.logo} href="/">{header}</a>
        <div className={styles.headerright}>
            <a className={styles.active} href="/about">About</a>
            <a target="_blank" href="https://carinakan.com/">Contact</a>
        </div>
    </div>
)

export default Header;
