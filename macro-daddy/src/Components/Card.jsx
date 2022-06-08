import React from "react";

const Card = ({ recipe }) => {
    
  return (
    <div className="card-parent">
      <div className="card">
        <img src={recipe.image} alt="" />
        <p>{recipe.title}</p>
        <p>Calories: {recipe.nutrition.nutrients[0].amount}</p>
        <p>Protein: {recipe.nutrition.nutrients[8].amount}</p>
        <p>Fats: {recipe.nutrition.nutrients[1].amount}</p>
        <p>Carbs: {recipe.nutrition.nutrients[3].amount}</p>
        <br />
        <button>Kill Me</button>
      </div>
    </div>
  );
};

export default Card;
