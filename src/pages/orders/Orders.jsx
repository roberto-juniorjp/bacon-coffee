import React from "react";
import styles from "./Orders.module.css";

const Orders = () => {
  return (
    <div className={styles.orderContainer}>
      <div className={styles.order}>
        <div className={styles.orderList}></div>
        <div className={styles.orderValue}></div>
      </div>
    </div>
  );
};

export default Orders;
