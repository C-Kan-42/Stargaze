import React, {useState, useRef} from "react";
import classnames from 'classnames';
import styles from "./dropdown.module.scss";
import '../Location/location';

const DropdownMenu = () => {
  const [isActive, setIsActive] = useState(false);
  const openClass = isActive ?  styles.open : '';

  return (
    <div className={styles.menuContainer}>
      <button onClick={() => setIsActive(!isActive)} className={classnames(styles.menuTrigger, openClass)}>
        <span className={styles.buttonContent}>Where do you want to stargaze?</span>
      </button>
      {isActive &&
        <nav className={styles.menu}>
            <ul>
            <li><a href="/Stargaze/sf">San Francisco</a></li>
            <li><a href="/Stargaze/pdx">Portland</a></li>
            <li><a href="/Stargaze/la">Los Angeles</a></li>
            </ul>
        </nav>
      }
    </div>
  );
};

export default DropdownMenu;