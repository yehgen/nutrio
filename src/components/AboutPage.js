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
import { Link, BrowserRouter, Routes, Route } from "react-router-dom"

// Components
import Button from '@mui/material/Button';
import NutritionLabel from "../NutritionLabel";
import Main from '../components/Main';
import AboutPage from './AboutPage';

function App() {
  return (
    <div className = "App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" component={Main}/>
          <Route exact path="/about" component={AboutPage}/>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          {/* <Route exact path="/work" component={WorkPage}/>
          <Route exact path="/skills" component={MySkillsPage}/> */}
        </Routes>
      </BrowserRouter>

      <div className = "title">
        <h1>Hi</h1>
      </div>
      <Chart className = "health-chart"
        width={250}
        height={250}
        series={[
          {
            data: [
              1,
              2,
              3,
              4
            ]
          },
          {
            data: [
              5,
              7,
              11
            ]
          },
          {
            data: [
              13,
              17,
              19
            ]
          }
        ]}
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
            padAngle={0.025}
            cornerRadius={5}
            innerPadding={5}
            pieAttributes={{
              onMouseLeave: function noRefCheck(){},
              onMouseMove: function noRefCheck(){}
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
