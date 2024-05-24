import React from "react";
import styles from "./Footer.module.css";

import { Link } from "react-router-dom";

function useLayoutEffect() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p>
        <Link to="/" onClick={() => useLayoutEffect()}>
          Bacon Coffee
        </Link>{" "}
        @ Todos os Direitos Reservados.
      </p>
    </div>
  );
};

export default Footer;
