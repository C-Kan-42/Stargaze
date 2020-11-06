import React from "react";
import styles from "./header.module.scss";

const Header = ({header}) => (
    <div className={styles.header}>
      <nav>
        <a className={styles.link} href="/">{header}</a>
        <a className={styles.link} href="/about">About</a>
      </nav>
    </div>
)

export default Header;
