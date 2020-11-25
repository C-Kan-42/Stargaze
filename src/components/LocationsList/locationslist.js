import React, {useState, useRef} from "react";
import styles from "./locationslist.module.scss";
import Card from '../Card/card';
import data from './data.json';

//create card components
//map cards
//access props from data

const listItems = data.cards.map ((item) => 
    <Card title={item.title} address={item.address} distance={item.distance} />
);

const LocationsList = () => (
    <div className={styles.listContainer}>
        <div className= {styles.list}>
            {listItems}
        </div>
    </div>
)

export default LocationsList;