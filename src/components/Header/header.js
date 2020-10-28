import React from "react";
import styles from "./header.module.scss";

const Header = ({header}) => (
  <div className={styles.header}>
    <a className={styles.link} href="/">{header}</a>

    <nav>
      <a className={styles.link} href="#">About</a>
    </nav>
  </div>
)

export default Header;
