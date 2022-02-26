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
import Button from '@mui/material/Button';
import NutritionLabel from "./NutritionLabel";

function App() {
  return (
    <div className = "App">
      <div className = "title">
        <h1>Dashboard</h1>
      </div>
      <Chart
        height={400}
        series={[
          {
            data: [
              1,
              2,
              4
            ]
          }
        ]}
        width={600}
      >
        <Transform
          method={[
            'transpose',
            'stack'
          ]}
        >
          <Pies
            className="pie"
            combined
          />
        </Transform>
      </Chart>
      <div className = "health-index">
        <h1>Health Index</h1>

        {/* need work */}
        <NutritionLabel legend="legend1" nutrient="Vitamin A"></NutritionLabel>
        <NutritionLabel legend="legend2" nutrient="Vitamin D"></NutritionLabel>
        <NutritionLabel legend="legend3" nutrient="Calcium"></NutritionLabel>

        {/* TODO replace the below divs with NutritionLabel components */}
        {/*<div className = "wrapper">
          <div className = "legend1"></div>
          <p><b>Vitamin A</b></p>
        </div>
        <div className = "wrapper">
          <div className = "legend2"></div>
          <p><b>Vitamin D</b></p>
        </div>
        <div className = "wrapper">
          <div className = "legend3"></div>
          <p><b>Calcium</b></p>
        </div>
        <div className = "wrapper">
          <div className = "legend4"></div>
          <p><b>Potassium</b></p>
        </div>*/}

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

export default App;
