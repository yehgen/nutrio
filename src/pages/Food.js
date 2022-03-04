// for searching or tracking food items
import '../App.css';
import '../Food.css';
import '../NutritionLabel.css';

import { useState, useEffect } from "react";
import * as React from 'react';

// Components
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Food = () => {
  const [foodData, setFoodData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  // using JSON Server for data sourcing temporarily
  // npx json-server --watch data/food.json --port 8000
  useEffect(() => {
    fetch("http://localhost:8000/foods")
      .then(res => {
        return res.json()
      })
      .then(data => {
        setFoodData(data)
      })
  }, []);
  // }, [foodData]); // useEffect will run each time [foodData] changes

  const searchData = (value) => {
    setSearchTerm(value)
    if (searchTerm !== '') {
      const filteredData = foodData.filter((item) => {
        return Object.values(item.name).join('').toLowerCase().includes(searchTerm.toLowerCase())
      })
      setFilteredResults(filteredData)
    } else {
      setFilteredResults(foodData)
    }
}

  return (
  <div className="App-left">
    <h1>Add Food Intake</h1>
    <form noValidate autoComplete="off">
      <div className="input-field">
        <TextField
          onChange={(e) => searchData(e.target.value)}
          id="standard-basic"
          label="Search foods"
          variant="standard"
          fullWidth
        />
        {/* <Button variant="contained">Search</Button> */}
      </div> 
    </form>
    
    {/* componentize in the future */}
    <div>
      {searchTerm.length > 1 ? (
        // this returns results when the search bar is populated
        filteredResults.map((item) => {
          return (
            <div className="food-card" key={item.id}>
              <h2>{item.name}</h2>
              Serving size: {item.serving}
              <div className="food-vit">
                <div className="legend1"></div>
                <p>{item.vitaminA}</p>
              </div>
              <div className="legend2"></div>
              <div className="legend3"></div>
              <div className="legend4"></div>
            </div>
          )
        })
      ) : (
        // this is the default state of items
        foodData.map((item) => {
          return (
            <div className="food-card" key={item.id}>
              <h2>{item.name}</h2>
              Serving size: {item.serving}
            </div>
          )
        })
      )}
    </div>
  </div>
  );
}

export default Food;