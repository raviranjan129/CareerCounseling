import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/pages/Layout";
import Home from "./components/pages/Home";
import AboutUs from "./components/pages/AboutUs";
import Services from "./components/pages/Services";
import BookCall from "./components/pages/BookCall";
import ContactUs from "./components/pages/ContactUs";


const AppRoutes = () => {
  return (
    <Routes>
     
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="services" element={<Services />} />
        <Route path="bookcall" element={<BookCall />} />
        <Route path="contact" element={<ContactUs />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
