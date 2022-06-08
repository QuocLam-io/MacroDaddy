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
        <img src={recipe.image} alt="" />
        <p>{recipe.title}</p>
        <p>Calories: {recipe.nutrition.nutrients[0].amount}</p>
        <p>Carbs: {recipe.nutrition.nutrients[3].amount}</p>
        <p>Fats: {recipe.nutrition.nutrients[1].amount}</p>
        <p>Protein: {recipe.nutrition.nutrients[8].amount}</p>
        <br />
        <button onClick={test}>Kill Me</button>
      </div>
    </div>
  );
};

export default Card;
