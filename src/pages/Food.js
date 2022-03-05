// for searching or tracking food items
import '../App.css';
import '../Food.css';
import '../NutritionLabel.css';

import { useState, useEffect } from "react";
import * as React from 'react';
import { useNavigate, Link } from "react-router-dom";

// Components
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Food = () => {
  const [foodData, setFoodData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const navigate = useNavigate();

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

  const onClick = (item) => {
    // navigate to home page after click (for MVP)
    let path = "/";
    navigate (
      path, { 
        state : {
          a: item.vitaminA,
          b: item.vitaminB,
          c: item.vitaminC,
          k: item.vitaminK
        }
      }
    );

    console.log("click");

    // return (
      console.log([item.vitaminA, item.vitaminB, item.vitaminC, item.vitaminK])
    // )
  };

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
            // link back to homepage after click (MVP)
            // <Link
            //   className="card-link"
            //   to={{
            //     pathname: "/err",
            //     state: item
            //   }}
            // >
              <div
                className="food-card foot-btn" 
                key={item.id} 
                onClick={() => onClick(item)}
              >
                <h2>{item.name}</h2>
                Serving size: {item.serving}
                <div className="vitamins">
                  <div className="food-vit">
                    <div className="legend1"></div>
                    <p>Vitamin A: {item.vitaminA || "0"}</p>
                  </div>
                  <div className="food-vit">
                    <div className="legend2"></div>
                    <p>Vitamin B: {item.vitaminB || "0%"}</p>
                  </div>
                  <div className="food-vit">
                    <div className="legend3"></div>
                    <p>Vitamin C: {item.vitaminC || "0%"}</p>
                  </div>
                  <div className="food-vit">
                    <div className="legend4"></div>
                    <p>Vitamin K: {item.vitaminK || "0%"}</p>
                  </div>
                </div>
              </div>
            // </Link>
          )
        })
      ) : (
        // this is the default state of items focused on minimalism
        foodData.map((item) => {
          return (
            // <Link
            //   className="card-link"
            //   to={{
            //     pathname: "/err",
            //     state: item
            //   }}
            // >
              <div 
                className="food-card"
                key={item.id} 
                onClick={() => onClick(item)} // pass in item to reference nutritional value
              >
                <h2>{item.name}</h2>
                Serving size: {item.serving}
                <div className="vitamins">
                  {item.vitaminA ? (
                    <div className="legend1"></div>
                  ) : (
                    <div></div>
                  )}
                  {item.vitaminB ? (
                    <div className="legend2"></div>
                  ) : (
                    <div></div>
                  )}
                  {item.vitaminC ? (
                    <div className="legend3"></div>
                  ) : (
                    <div></div>
                  )}
                  {item.vitaminK ? (
                    <div className="legend4"></div>
                  ) : (
                    <div></div>
                  )}
                </div>
              </div>
            // </Link>
          )
        })
      )}
    </div>
  </div>
  );
}

export default Food;