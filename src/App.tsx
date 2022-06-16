import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductsPage from "./Containers/ProductsPage";
import Homepage from "./Containers/Homepage";
import PremiumPage from "./Containers/PremiumPage";
import BlogPage from "./Containers/BlogPage";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import {
  ROUTER_PATH_BLOG,
  ROUTER_PATH_HOME,
  ROUTER_PATH_PREMIUM,
  ROUTER_PATH_PRODUCTS,
} from "./Constant";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path={ROUTER_PATH_HOME} element={<Homepage />} />
        <Route path={ROUTER_PATH_PRODUCTS} element={<ProductsPage />} />
        <Route path={ROUTER_PATH_PREMIUM} element={<PremiumPage />} />
        <Route path={ROUTER_PATH_BLOG} element={<BlogPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
