// map through food.json array to create cards
// import {useState} from 'react'
import './App.css';
import React from "react";

function FoodCard(item) {
  return (
    <div className="food-list">
      {item.name}
    </div>
  );
}

export default FoodCard
