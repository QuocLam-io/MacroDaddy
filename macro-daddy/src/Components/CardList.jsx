import React, { useEffect } from "react";
import axios from "axios";
import Card from "./Card";

const CardList = ({
  userStats,
  bmr,
  setBmr,
  callAxios,
  displayCard,
  recipes,
}) => {

//! --------------------------- Yonghai is a genius -------------------------- */

  let data;

  if (recipes.length === 0) {
    data = <h1>My heart leaps, running for the stick You never threw.</h1>;
  } else {
    data = recipes.map((recipe) => {
      return <Card key={recipe.id} recipe={recipe} />;
    });
  }
//! --------------------------------------------------------------------------- */
  useEffect(() => {
    if (userStats.gender === "female") {
      setBmr(
        (655 +
          4.35 * userStats.weight +
          4.7 * userStats.height -
          4.7 * userStats.age) *
          userStats.physical
      );
    } else {
      setBmr(
        (66 +
          6.23 * userStats.weight +
          12.7 * userStats.height -
          6.8 * userStats.age) *
          userStats.physical
      );
    }
  }, []);
  //   console.log(bmr);

  return (
    <div className="cardlist-parent">
      <div className="macro-display">
        <p>Age: {userStats.age}</p>
        <p>Calories: {bmr}</p>
        <p>Proteins:</p>
        <p>Carbs:</p>
        <p>Fats:</p>
        <div>{data}</div>
      </div>
    </div>
  );
};

export default CardList;