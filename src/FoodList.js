// map through food.json array to create cards
// import {useState} from 'react'
import './App.css';
import React from "react";

function FoodList( {food} ) {
  console.log(food);
  return (
    <div className="food-list">
      {food.map((item) => (
        <div className="food-preview" key={item.id}>
          <h2>{ item.name }</h2>
          <p>Serving size: { item.serving }</p>
        </div>
      ))}
    </div>
  );
}

export default FoodList
