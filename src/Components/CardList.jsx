import React, { useEffect } from "react";
import Card from "./Card";

const CardList = ({
  userStats,
  bmr,
  setBmr,
  recipes,

  displayMacros,
  setDisplayMacros,
}) => {
  let genderHandler = () => {
    if (userStats.gender === "female") {
      setBmr(
        Math.round(
          (655 +
            4.35 * userStats.weight +
            4.7 * userStats.height -
            4.7 * userStats.age) *
            userStats.physical
        )
      );
    } else {
      setBmr(
        Math.round(
          (66 +
            6.23 * userStats.weight +
            12.7 * userStats.height -
            6.8 * userStats.age) *
            userStats.physical
        )
      );
    }
  };

  useEffect(() => {
    genderHandler();
    // eslint-disable-next-line
  }, []);

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

  const deficit = Math.round(bmr - displayMacros.calories);
  bmr = Math.round(bmr);

  return (
    <div className="cardlist-parent">
      <div className="card-display">{recipeCards}</div>
      <div className="macro-display">
        <br />

        <div className="display-math">
          <div>MY DAILY MACROS</div>
          <div className="math-divide">
            <div>{displayMacros.calories}</div>
            <div>Calories</div>
            <div>/</div>
            <div> {bmr}</div>
            <div>TDEE</div>
          </div>
          <div className="never">
            <div className="ever">{deficit}</div>
            <div className=""> Deficit</div>
          </div>
        </div>

        <img
          className="plate"
          src={require(`../images/Food Illustration.png`)}
          alt=""
        />
        <p>Start Logging your meals</p>
        <div className="display-stats">
          <div>Carbs: {displayMacros.carbs} </div>
          <div>Fats: {displayMacros.fats}</div>
          <div>Proteins: {displayMacros.proteins}</div>
        </div>
      </div>
    </div>
  );
};

export default CardList;
