import {useState, useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";
import FAQ from "./Components/FAQ";
import Login from "./Components/Login";
import Registation from "./Components/Registtion";
import ListProduct from "./Components/ListProduct";
function App() {


  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
            <Route index element={<Home />} />
            <Route path="/products" element={<ListProduct />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registation />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
   
  );
}

export default App;
