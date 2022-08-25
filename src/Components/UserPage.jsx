import React from "react";

const UserPage = ({bmr, displayMacros, userStats}) => {
  const deficit = Math.round(bmr - displayMacros.calories);
  bmr = Math.round(bmr);
  console.log(userStats);
  return (
    <div className="userpage-parent">
      <img
        className="janice"
        src="https://i.fbcd.co/products/resized/resized-750-500/d4c961732ba6ec52c0bbde63c9cb9e5dd6593826ee788080599f68920224e27d.webp"
        alt=""
      />
      <p>Name: {userStats.name}</p>
      <p>Age: {userStats.age}</p>
      <p>Height: {userStats.height} inches</p>
      <p>Weight: {userStats.weight} lbs</p>
      <div className="display-math">
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
      {/* <p>Start Logging your meals</p> */}
      <div className="display-stats">
        <div>Carbs: {displayMacros.carbs} </div>
        <div>Fats: {displayMacros.fats}</div>
        <div>Proteins: {displayMacros.proteins}</div>
      </div>
    </div>
  );
};

export default UserPage;
