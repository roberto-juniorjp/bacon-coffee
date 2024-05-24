import React, { useState } from "react";
import styles from "./Menu.module.css";

import { MobileButton } from "../atoms/Elements";

import { FaHome, FaShoppingBag, FaRegCreditCard, FaLock } from "react-icons/fa";

import { IoMdClose } from "react-icons/io";

import { Link } from "react-router-dom";

const Menu = () => {
  function handleMobileButton() {
    setMobileMenu(!mobileMenu);
  }

  const [mobileMenu, setMobileMenu] = useState(true);

  return (
    <div className={styles.menuContainer}>
      <nav className={styles.menu}>
        <ul className={styles.desktop}>
          <li>
            <Link to="/">
              <FaHome />
              <span>Home</span>
            </Link>
          </li>

          <li>
            <Link to="/orders">
              <FaShoppingBag />
              <span>Orders</span>
            </Link>
          </li>

          <li>
            <Link to="/checkout">
              <FaRegCreditCard />
              <span>Checkout</span>
            </Link>
          </li>

          <li>
            <Link to="/admin">
              <FaLock />
              <span>Admin</span>
            </Link>
          </li>
        </ul>
        <ul className={styles.mobile}>
          <li>
            <Link to="/">
              <FaHome />
              <span>Home</span>
            </Link>
          </li>
          <li className={styles.mobileButton}>
            <MobileButton onClick={() => handleMobileButton()} />
          </li>
        </ul>
        <div
          className={`${styles.mobileDropDownContainer} ${
            mobileMenu ? styles.mobileMenuDisable : styles.mobileMenuEnable
          }`}
        >
          <ul className={styles.mobileDropDown}>
            <li className={styles.mobileDropDownClose}>
              <IoMdClose onClick={() => handleMobileButton()} />
            </li>
            <li>
              <Link to="/" onClick={() => handleMobileButton()}>
                <FaHome />
                <span>Home</span>
              </Link>
            </li>

            <li>
              <Link to="/orders" onClick={() => handleMobileButton()}>
                <FaShoppingBag />
                <span>Orders</span>
              </Link>
            </li>

            <li>
              <Link to="/checkout" onClick={() => handleMobileButton()}>
                <FaRegCreditCard />
                <span>Checkout</span>
              </Link>
            </li>

            <li>
              <Link to="/admin" onClick={() => handleMobileButton()}>
                <FaLock />
                <span>Admin</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Menu;
