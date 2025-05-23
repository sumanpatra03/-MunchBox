import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import AboutUs from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import B2B from "../Pages/B2B/B2B";

import CategoryPage from "../Pages/CategoryPage/CatagoryPage";
import CartPage from "../Pages/Cart/CartPage";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import SinglePage from "../Pages/SinglePage/SinglePage";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/b2b-orders" element={<B2B />} />
        <Route path="/category/:categoryName" element={<CategoryPage />} />
        <Route path="/category/:categoryName/:id" element={<SinglePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
