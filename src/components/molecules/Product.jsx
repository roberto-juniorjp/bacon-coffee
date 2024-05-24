import React, { useState } from "react";
import {
  product,
  productButtons,
  itemInfo,
  incrementors,
} from "./Product.module.css";
import coffee from "../../assets/img/products/coffee.webp";

import {
  DefaultButton,
  IncrementButton,
  ProductPicture,
} from "../../components/atoms/Elements";

const Product = (prop) => {
  const [amount, setAmount] = useState(1);

  function handleAmount(operation) {
    if (operation === "-") {
      amount > 0 && setAmount(amount - 1);
    } else {
      setAmount(amount + 1);
    }
  }

  return (
    <div className={product}>
      <ProductPicture image={prop.image} />
      <h2>{prop.name}</h2>
      <div className={itemInfo}>
        <h3>{prop.description}</h3>
        <h4>{prop.price}</h4>
      </div>
      <div className={productButtons}>
        <div className={incrementors}>
          <IncrementButton label="-" onClick={() => handleAmount("-")} />
          <h4>{amount}</h4>
          <IncrementButton label="+" onClick={() => handleAmount("+")} />
        </div>

        <DefaultButton label="ADD" />
      </div>
    </div>
  );
};

export default Product;
