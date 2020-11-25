import React, {useState, useRef} from "react";
import styles from "./location.module.scss";
import Map from '../Map/map';
import LocationsList from '../LocationsList/locationslist';

const Location = ({title, lng, lat}) => (
    <div className={styles.locationContainer}>
        <div className={styles.title}>
            {title}
        </div>
        <div>
            <Map id="map" lng={lng} lat={lat} /> 
        </div>
        
        <LocationsList />
    </div>
)

export default Location;
