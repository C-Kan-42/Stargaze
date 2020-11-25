import React from "react";
import styles from "./header.module.scss";

const Header = ({header}) => (
    <div className={styles.header}>
        <a className={styles.logo} href="/Stargaze">{header}</a>
        <div className={styles.headerright}>
            <a className={styles.active} href="/about">About</a>
            <a href="/#">Contact</a>
        </div>
    </div>
)

export default Header;
