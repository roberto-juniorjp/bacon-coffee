// CORE MODULES
import React, { useState } from "react";

// CSS
import "./App.css";

// COMPONENTS
import Layout from "./components/templates/Layout";
import { Route, Routes } from "react-router-dom";

import Shop from "./pages/shop/Shop";
import Orders from "./pages/orders/Orders";
import Checkout from "./pages/checkout/Checkout";
import Admin from "./pages/admin/Admin";
import NotFound from "./pages/NotFound";

function App() {
  const userInfo = [
    {
      name: "userName",
      email: "userEmail",
      address: "Nowhere",
      payment: "Manual",
    },
  ];
  const cartInfo = [
    {
      id: 0,
      product: "productX",
      amount: 0,
    },
  ];
  const orderInfo = [{ orders: [], status: "nonexistant" }];

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Shop />} />
          <Route path="orders" element={<Orders />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="admin" element={<Admin />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
