import React, {useState, useRef} from "react";
import styles from "./nomatch.module.scss";

const NoMatch = () => (
    <div className={styles.noMatchContainer}>
        This page cannot be found.
    </div>
)

export default NoMatch;