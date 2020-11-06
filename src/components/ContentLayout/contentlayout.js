import React from "react";
import styles from "./contentlayout.module.scss";

const ContentLayout = ({children}) => (
    <div className={styles.contentContainer}>
        {children}
    </div>
)

export default ContentLayout;
