import React, {useState, useRef} from "react";
import styles from "./card.module.scss";
// import data from '../LocationsList/data.json';

//create card components
//map cards
//access props from data

const Card = props => (
    <div className={styles.cardContainer}>
        <div className={styles.name}>
            {props.title}
        </div>
        <div className={styles.address}>
            {props.address}
        </div>
        <div className={styles.distance}>
            {props.distance}
        </div>
    </div>
)

export default Card;