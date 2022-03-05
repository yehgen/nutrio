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

const a = 100;
const b = 0.5;
const c = 1;
const k = 1;
// data values where letters = vitamins corresponding to the letter
// zeros are placeholders for potential nutrients in the future
// digit 1 is unfilled space showing how much is left to hit   the recommended daily intake
const series = [{
  data: [k, 0, 0, 0, 0, 0, 0, 1]
}, {
  data: [0, c, 0, 0, 0, 0, 0, 1]
}, {
  data: [0, 0, b, 0, 0, 0, 0, 1]
},{
  data: [0, 0, 0, a, 0, 0, 0, 1]
}];

const Home = () => {
  return (
    <div className = "App">
      <div className = "title">
        <h1>Hello, Brock!</h1>
      </div>
      <Chart
        width={300}
        height={300}
        series={series}
        minY={undefined}
      >
        <Transform
          method={[
            'transpose',
            'stackNormalized'
          ]}
        >
          <Pies
            colors="category10"
            combined
            innerRadius="33%"
            // padAngle={0.025}
            // cornerRadius={5}
            innerPadding={5}
            pieAttributes={{
              onMouseLeave: e => e.target.style.opacity = 0.75,
              onMouseMove: e => e.target.style.opacity = 1,
            }}
            pieStyle={{
              opacity: 0.75
            }}
          />        
        </Transform>
      </Chart>
      <div className = "health-index">
        <h1>Summary</h1>

        <NutritionLabel legend="legend1" nutrient="Vitamin A"></NutritionLabel>
        <NutritionLabel legend="legend2" nutrient="Vitamin B"></NutritionLabel>
        <NutritionLabel legend="legend3" nutrient="Vitamin C"></NutritionLabel>
        <NutritionLabel legend="legend4" nutrient="Vitamin K"></NutritionLabel>

      </div>
      <div className = "Food">
        <h1>Recommended Foods</h1>
        <Button variant="contained">Apricot</Button>
        <div className = "spacer"></div>
        <Button variant="contained">Blueberry</Button>
        <div className = "spacer"></div>
        <Button variant="contained">Date</Button>
      </div>
    </div>
  );
}

export default Home;