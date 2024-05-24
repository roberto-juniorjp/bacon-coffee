import React from "react";
import styles from "./Header.module.css";

import logo from "../../assets/img/bacon-coffee-logo.webp";
import Menu from "../molecules/Menu";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">
          <img src={logo} alt="bacon coffee logo" />
        </Link>
      </div>
      <Menu />
    </div>
  );
};

export default Header;
