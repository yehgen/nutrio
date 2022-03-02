// for searching or tracking food items
import '../App.css';
import '../Food.css';
import { useState, useEffect } from "react";
import * as React from 'react';

// Components
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FoodList from "../FoodList";

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
        console.log(data);
        setFoodData(data)
      })
  }, []);
  // }, [food]); // useEffect will run each time [food] changes

  const searchData = (value) => {
    setSearchTerm(value)
    if (searchTerm !== '') {
      const filteredData = foodData.filter((item) => {
        return Object.values(item).join('').toLowerCase().includes(searchTerm.toLowerCase())
      })
      setFilteredResults(filteredData)
    }
    else {
      setFilteredResults(foodData)
    }
}

  return (
  <div className="App-left">
    <h1>Add Food Intake</h1>
    <form noValidate autoComplete="off">
      <div className="input-field">
        <TextField
          // onChange={(e) => setFood(e.target.value)}
          onChange={(e) => searchData(e.target.value)}
          id="standard-basic"
          label="food"
          variant="standard"
          fullWidth
          // error={inputError}
        />
        <Button variant="contained">Search</Button>
      </div> 
    </form>
    
    <div>
      {searchTerm.length > 1 ? (
        filteredResults.map((item) => {
          return (
            <div>
              {item.name}
              {item.serving}
            </div>
          )
        })
      ) : (
        foodData.map((item) => {
          return (
            <div>
              {item.name}
              {item.serving}
            </div>
          )
        })
      )}
      <FoodList food={foodData} />
      {/* only create a FoodList when food is set, otherwise show nothing when food === null */}
      {/* {food && <FoodList food={food} />} */}

      {/* the following FoodList returns a list of items containing the keyterm */}
      {/* <FoodList food={food.filter((food) => food.name.toLowerCase().includes("straw"))} /> */}
    </div>
  </div>
  );
}

export default Food;