import React from "react";
import "./App.css";
import {
  ROUTER_PATH_BLOG,
  ROUTER_PATH_HOME,
  ROUTER_PATH_PREMIUM,
  ROUTER_PATH_PRODUCTS,
} from "./Constant";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Containers/Homepage";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Products from "./Components/Products";
import Premium from "./Components/Premium";
import Blog from "./Components/Blog";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path={ROUTER_PATH_HOME} element={<Homepage />} />
        <Route path={ROUTER_PATH_PRODUCTS} element={<Products />} />
        <Route path={ROUTER_PATH_PREMIUM} element={<Premium />} />
        <Route path={ROUTER_PATH_BLOG} element={<Blog />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
