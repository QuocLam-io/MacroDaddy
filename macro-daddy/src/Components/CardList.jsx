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

  displayMacros,
  setDisplayMacros,
}) => {
  //! --------------------------- Yonghai is a genius -------------------------- */

  let recipeCards;

  if (recipes.length === 0) {
    recipeCards = (
      <h1 className="heart">
        My heart leaps, running for the stick you never threw.
      </h1>
    );
  } else {
    recipeCards = recipes.map((recipe) => {
      return (
        <Card
          key={recipe.id}
          recipe={recipe}
          displayMacros={displayMacros}
          setDisplayMacros={setDisplayMacros}
        />
      );
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

  return (
    <div className="cardlist-parent">
    
      <div className="card-display">{recipeCards}</div>
      <div className="macro-display">
        <br />
        <p>MY DAILY MACROS</p>
        <p>TDEE: {bmr}</p>
        <p>Calories: {displayMacros.calories}</p>
        <p>Carbs: {displayMacros.carbs}</p>
        <p>Fats: {displayMacros.fats}</p>
        <p>Proteins: {displayMacros.proteins}</p>
        <img className="plate" src={require(`../images/Food Illustration.png`)} alt="" />
        <p>Start Logging your meals</p>
      </div>
    </div>
  );
};

export default CardList;
