import React from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Products from "./Components/Products";
import Homepage from "./Containers/Homepage";
import { ROUTER_PATH_HOME, ROUTER_PATH_PRODUCTS } from "./Constant";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path={ROUTER_PATH_HOME} element={<Homepage />} />
        <Route path={ROUTER_PATH_PRODUCTS} element={<Products />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
