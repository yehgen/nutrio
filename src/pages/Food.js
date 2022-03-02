// for searching or tracking food items
import '../App.css';
import '../Food.css';
import { useState, useEffect } from "react";
import * as React from 'react';

// Components
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Food = () => {
  const [food, setFood] = useState("")
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
    console.log("use effect");
    console.log(food);
  }, [food]); // useEffect will run each time [food] changes

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
  </div>
  );
}

export default Food;