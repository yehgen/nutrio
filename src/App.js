import './App.css';
import * as React from 'react';
import ReactDOM from 'react-dom';
// where Routes = Switch
import { Link, BrowserRouter, Routes, Route } from "react-router-dom"

// Components
// import Button from '@mui/material/Button';
// import NutritionLabel from "./NutritionLabel";

import Home from "./pages/Home"
import Food from "./pages/Food"
import User from "./pages/User"
import Layout from "./pages/Layout"
import Err from "./pages/Err"

function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}></Route>
            <Route path="food" element={<Food/>}></Route>
            <Route path="user" element={<User/>}></Route>
            <Route path="*" element={<Err/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
