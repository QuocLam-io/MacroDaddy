import React, { useEffect } from "react";
import axios from "axios";

const CardList = ({ userStats }) => {

  return (
    <div className="cardlist-parent">
      <h1 className="test">I am a card page</h1>
      <div className="macro-display">
        <p>Age: {userStats.age}</p>
        <p>Calories:</p>
        <p>Proteins:</p>
        <p>Carbs:</p>
        <p>Fats:</p>
      </div>
    </div>
  );
};

export default CardList;
