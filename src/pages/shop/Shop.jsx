import React from "react";

import styles from "./Shop.module.css";

// DATA
import { data } from "../../assets/data/data";

import ProductList from "../../components/organisms/ProductList";

const Shop = () => {
  return (
    <div className={styles.shop}>
      <ProductList products={data} />
    </div>
  );
};

export default Shop;
