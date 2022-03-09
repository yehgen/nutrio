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
// useLocation to retrieve data from Food.js
import { Link, BrowserRouter, Routes, Route, useLocation } from "react-router-dom"

// Components
import Button from '@mui/material/Button';
import NutritionLabel from "../NutritionLabel";
import FoodName from "../FoodName";

const Home = () => {
  const state = useLocation();
  console.log(state)

  // console.log(state.state.a)
  // console.log(typeof {state})

  // console.log(state.state.a.replace("%", ""))
  let a = 0;
  let b = 0;
  let c = 0;
  let k = 0;
  let foodName = "";

  // on first launch, state === null so we perform no checks and retain default values
  if (state.state !== null) {
    // series of checks to convert data into a readable number data without the % sign
    if (state.state.a !== undefined) {
      if (state.state.a.includes("%")) {
        const vitA = state.state.a.replace("%", "");
        a = Number(vitA);
      }
    }
    if (state.state.b !== undefined) {
      if (state.state.b.includes("%")) {
        const vitB = state.state.b.replace("%", "");
        b = Number(vitB);
      }
    }
    if (state.state.c !== undefined) {
      if (state.state.c.includes("%")) {
        const vitC = state.state.c.replace("%", "");
        c = Number(vitC);
      }
    }
    if (state.state.k !== undefined) {
      if (state.state.k.includes("%")) {
        const vitK = state.state.k.replace("%", "");
        k = Number(vitK);
      }  
    }

    // name of food to add to daily log, if selected
    // by default this is undefined so daily log should show nothing
    // use "let" because foodName will change in the future to populate log
    if (state.state.name !== undefined) {
      let foodName = state.state.name.toUpperCase();
      console.log(foodName)
    }
  }

  // data values where letters = vitamins corresponding to the letter
  // zeros are placeholders for potential nutrients in the future
  // digit 1 is unfilled space showing how much is left to hit the recommended daily intake
  // values are /50 to better reflect data visually, TBD: figure out how numbers determine visuals
  const series = [{
    data: [k/50, 0, 0, 0, 0, 0, 0, 1]
  }, {
    data: [0, c/50, 0, 0, 0, 0, 0, 1]
  }, {
    data: [0, 0, b/50, 0, 0, 0, 0, 1]
  },{
    data: [0, 0, 0, a/50, 0, 0, 0, 1]
  }];

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
        <NutritionLabel legend="legend1" nutrient="Vitamin A" value={a}></NutritionLabel>
        <NutritionLabel legend="legend2" nutrient="Vitamin B" value={b}></NutritionLabel>
        <NutritionLabel legend="legend3" nutrient="Vitamin C" value={c}></NutritionLabel>
        <NutritionLabel legend="legend4" nutrient="Vitamin K" value={k}></NutritionLabel>
       
        <div className="spacer"></div>
        <div className="spacer"></div>
        <h1>Daily Log</h1>
      </div>

      {/* unsure why foodName is not populating, shows in console */}
      {/* seems to not refresh foodName as an item is clicked */}
      <p><strong>{foodName}a</strong></p>
      <FoodName name={foodName} />
      
      {/* <p className="log-subhead">Vitamin A: {a}% Vitamin B: {b}% Vitamin C: {c}% Vitamin K {k}%</p> */}

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