import React from "react";
import {
  defaultButton,
  incrementButton,
  productPicture,
  mobileButton,
  pageTitle,
} from "./Elements.module.css";

import { IoMenu } from "react-icons/io5";

const DefaultButton = (prop) => {
  return (
    <div className={defaultButton}>
      <button>{prop.label}</button>
    </div>
  );
};

const IncrementButton = ({ label, onClick }) => {
  return (
    <div className={incrementButton} onClick={onClick}>
      <button>
        <span>{label}</span>
      </button>
    </div>
  );
};

const ProductPicture = (prop) => {
  return (
    <div className={productPicture}>
      <img src={prop.image} alt="Bacon Coffee" />
    </div>
  );
};

const MobileButton = ({ onClick }) => {
  return (
    <div className={mobileButton}>
      <button onClick={onClick}>
        <IoMenu />
      </button>
    </div>
  );
};

const PageTitle = (prop) => {
  return (
    <div className={pageTitle}>
      <h1>{prop.label}</h1>
    </div>
  );
};

export {
  DefaultButton,
  IncrementButton,
  ProductPicture,
  MobileButton,
  PageTitle,
};
