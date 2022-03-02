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
  const [food, setFood] = useState([
      {
        "name": "Strawberry",
        "serving": "90g",
        "calories": "29",
        "carbohydrates": "6.9g",
        "fat": "0.3g",
        "protein": "0.6g",
        "sodium": "0.9mg",
        "potassium": "138mg",
        "vitamin A": "0.2%",
        "vitamin C": "88%",
        "calcium": "1.1%",
        "iron": "2.1%",
        "id": "1"
      },
      {
        "name": "Strawberry Jam",
        "serving": "90g",
        "calories": "29",
        "carbohydrates": "6.9g",
        "fat": "0.3g",
        "protein": "0.6g",
        "sodium": "0.9mg",
        "potassium": "138mg",
        "vitamin A": "0.2%",
        "vitamin C": "88%",
        "calcium": "1.1%",
        "iron": "2.1%",
        "id": "2"
      },
      {
        "name": "Apple",
        "serving": "90g",
        "calories": "29",
        "carbohydrates": "6.9g",
        "fat": "0.3g",
        "protein": "0.6g",
        "sodium": "0.9mg",
        "potassium": "138mg",
        "vitamin A": "0.2%",
        "vitamin C": "88%",
        "calcium": "1.1%",
        "iron": "2.1%",
        "id": "3"
      }
  ])
  const [inputError, setInputError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (food == "") {
      setInputError(true);
    }
    if (food) {
      setInputError(false)
      // setFood(""); not resetting input field because a user may want to specify their search
      // if their keyword(s) do not find relevant information (i.e. strawberry and strawberry jam)
      console.log(food);
    }
  }

  // using JSON Server for data sourcing temporarily
  // npx json-server --watch data/food.json --port 8000
  useEffect(() => {
    fetch("http://localhost:8000/foods")
      .then(res => {
        return res.json()
      })
      .then(data => {
        console.log(data);
        setFood(data)
      })
  }, []); // useEffect will run each time [food] changes
  // }, [food]);

  return (
  <div className="App-left">
    <h1>Add Food Intake</h1>
    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
      <div className="input-field">
        <TextField
          onChange={(e) => setFood(e.target.value)}
          id="standard-basic"
          label="food"
          variant="standard"
          fullWidth
          error={inputError}
        />
        <Button variant="contained" onClick={handleSubmit}>Search</Button>
      </div> 
    </form>
    
    <div>
      {/* {food && <FoodList food={food} title="Food!" />} */}
      <FoodList food={food} />
    </div>
  </div>
  );
}

export default Food;