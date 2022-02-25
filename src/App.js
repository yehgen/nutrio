import './App.css';
import {
  // main component
  Chart,
  // graphs
  Bars, Cloud, Dots, Labels, Lines, Pies, RadialLines, Ticks, Title,
  // wrappers
  Layer, Animate, Transform, Handlers,
  // helpers
  DropShadow, Gradient
} from 'rumble-charts';
import * as React from 'react';
import ReactDOM from 'react-dom';
// where Routes = Switch
import { Link, BrowserRouter, Routes, Route } from "react-router-dom"

// Components
import Button from '@mui/material/Button';
import NutritionLabel from "./NutritionLabel";
import Main from './components/Main';
import AboutPage from './components/AboutPage';
import OtherPage from './components/OtherPage';
import Home from "./pages/Home"
import About from "./pages/About"
import Layout from "./pages/Layout"
import Err from "./pages/Err"

function Router() {
  return (
    // TODO: Style Navigation
    <div className = "Nav">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}></Route>
            <Route path="about" element={<About/>}></Route>
            <Route path="*" element={<Err/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
