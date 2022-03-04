// main page dashboard
import '../App.css';
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
import NutritionLabel from "../NutritionLabel";

const Home = () => {
  return (
    <div className = "App">
      <div className = "title">
        <h1>Hello, Brock!</h1>
      </div>
      <Chart
        width={300}
        height={300}
        series={[
          {
            data: [
              1,
              2,
              4
            ]
          }
        ]}
        minY={undefined}
      >
        <Transform
          method={[
            'transpose',
            'stack'
          ]}
        >
          <Pies className="pie" combined />
        </Transform>
      </Chart>
      <div className = "health-index">
        <h1>Summary</h1>

        <NutritionLabel legend="legend1" nutrient="Vitamin A"></NutritionLabel>
        <NutritionLabel legend="legend2" nutrient="Vitamin B"></NutritionLabel>
        <NutritionLabel legend="legend3" nutrient="Vitamin C"></NutritionLabel>
        <NutritionLabel legend="legend4" nutrient="Vitamin D"></NutritionLabel>

      </div>
      <div className = "Food">
        <h1>Recommended Foods</h1>
        <Button variant="contained">Milk</Button>
        <div className = "spacer"></div>
        <Button variant="contained">Eggs</Button>
        <div className = "spacer"></div>
        <Button variant="contained">Rice</Button>
      </div>
    </div>
  );
}

export default Home;