import React, { useEffect } from "react";
import axios from "axios";

const CardList = ({ userStats, bmr, setBmr }) => {
  useEffect(() => {
    if (userStats.gender === "female") {
      setBmr(
        655 +
          4.35 * userStats.weight +
          4.7 * userStats.height -
          4.7 * parseInt(userStats.age)
      );
    } else {
      setBmr(
        66 +
          6.23 * userStats.weight +
          12.7 * userStats.height -
          6.8 * userStats.age
      );
    }
  }, []);
  console.log(bmr);

  return (
    <div className="cardlist-parent">
      <div className="macro-display">
        <p>Age: {userStats.age}</p>
        <p>Calories: {bmr}</p>
        <p>Proteins:</p>
        <p>Carbs:</p>
        <p>Fats:</p>
      </div>
    </div>
  );
};

export default CardList;
