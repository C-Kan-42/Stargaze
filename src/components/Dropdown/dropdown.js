import React, {useState, useRef} from "react";
import classnames from 'classnames';
import styles from "./dropdown.module.scss";

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
            <li><a href="#">San Francisco</a></li>
            <li><a href="#">Portland</a></li>
            <li><a href="#">Los Angeles</a></li>
            </ul>
        </nav>
      }
    </div>
  );
};

export default DropdownMenu;