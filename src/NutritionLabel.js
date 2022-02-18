// import {useState} from 'react'
import './App.css';
import React from "react";

function NutritionLabel(props) {
  return (
    <div className="wrapper">
      <div className="legend1"></div>
      <p className="nutrient">{props.nutrient}</p>
    </div>
  );
}

export default NutritionLabel
