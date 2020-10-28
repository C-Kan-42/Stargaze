import React, {useState, useRef} from "react";
import styles from "./dropdown.module.scss";

const DropdownMenu = () => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);

  return (
    <div className={"menu-container"}>
      <button onClick={onClick} className="menu-trigger">
        <span>Where do you want to stargaze?</span>
      </button>
      <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
        <ul>
          <li><a href="#">San Francisco</a></li>
          <li><a href="#">Portland</a></li>
          <li><a href="#">Los Angeles</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default DropdownMenu;