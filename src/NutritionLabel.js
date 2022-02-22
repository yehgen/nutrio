// import {useState} from 'react'
import './App.css';
import './NutritionLabel.css';
import React from "react";

function NutritionLabel(props) {
  return (
    <div className="wrapper">
      <div className={props.legend}></div>
      <p className="nutrient"><strong>{props.nutrient}</strong></p>
    </div>
  );
}

export default NutritionLabel
