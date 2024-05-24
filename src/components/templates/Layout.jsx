import React from "react";
import styles from "./Layout.module.css";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../organisms/Footer";
import Header from "../organisms/Header";
import { PageTitle } from "../atoms/Elements";
import { useEffect, useState } from "react";

const menu = [
  { id: 1, label: "Shop", url: "#" },
  { id: 2, label: "Orders", url: "#" },
  { id: 3, label: "Checkout", url: "#" },
  { id: 4, label: "Admin", url: "#" },
];

const Layout = () => {
  const [pageTitle, setPageTitle] = useState("");
  const location = useLocation();

  function handlePage() {
    switch (location.pathname) {
      case "/":
        setPageTitle("Bacon Coffee Store");
        break;
      case "/orders":
        setPageTitle("Your Order Details");
        break;
      case "/checkout":
        setPageTitle("Finish Your Order");
        break;
      case "/admin":
        setPageTitle("Administration Page");
        break;

      default:
        break;
    }
  }

  useEffect(() => {
    handlePage(location.pathname);
  }, [location]);

  return (
    <div className={styles.layout}>
      <Header />
      <PageTitle label={pageTitle} />
      <div className={styles.content}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
