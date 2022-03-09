import './App.css';
import React from "react";

function FoodName(props) {
  return (
    <div className="wrapper">
      <div>{props.name}</div>
    </div>
  );
}

export default FoodName