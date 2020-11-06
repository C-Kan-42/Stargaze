import React, {useState, useRef} from "react";
import styles from "./location.module.scss";
import Map from '../Map/map';

const Location = ({title}) => (
    <div className={styles.locationContainer}>
        {title}
        <div>
            <Map id="map" />
        </div>
    </div>
)

export default Location;
