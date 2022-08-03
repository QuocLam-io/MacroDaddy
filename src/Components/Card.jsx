import React from "react";

const Card = ({ recipe, setDisplayMacros, displayMacros }) => {
  function test(event) {
    event.preventDefault();
    //!Set the selected macros to the recipe's macros/Display
    setDisplayMacros({
      calories: displayMacros.calories + recipe.nutrition.nutrients[0].amount,
      carbs: displayMacros.carbs + recipe.nutrition.nutrients[3].amount,
      fats: displayMacros.fats + recipe.nutrition.nutrients[1].amount,
      proteins: displayMacros.proteins + recipe.nutrition.nutrients[8].amount,
    });
  }

  return (
    <div className="card-parent">
      <div className="card">
        <img className="card-img" src={recipe.image} alt="" />
        <p className="card-name">{recipe.title}</p>
        <div className="card-stats">
          <p>Calories {recipe.nutrition.nutrients[0].amount}</p>
          <p>Carbs {recipe.nutrition.nutrients[3].amount}g</p>
          <p>Fats {recipe.nutrition.nutrients[1].amount}g</p>
          <p>Protein {recipe.nutrition.nutrients[8].amount}g</p>
        </div>
        <div className="card-butts">
          <button className="card-butt-recipe">
            <a
              className="recipe-link"
              target="_blank"
              rel="noreferrer"
              href={recipe.sourceUrl}
            >
              View Recipe
            </a>
          </button>

          <button className="card-butt-add" onClick={test}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
