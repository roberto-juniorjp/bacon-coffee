// CORE MODULES
import React from "react";

// CSS
import { productList } from "./ProductList.module.css";

// COMPONENTS
import Product from "../molecules/Product";

const ProductList = ({ products }) => {
  return (
    <div className={productList}>
      {products.map((product) => {
        return (
          <Product
            key={product.id}
            name={product.name}
            description={product.description}
            image={product.image}
            price={`${product.currency_us} ${product.price}`}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
