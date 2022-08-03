import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import CardList from "./Components/CardList";
import LandingPage from "./Components/WandingPage";
import UserPage from "./Components/UserPage";
import axios from "axios";

function App() {
  const [userStats, setUserStats] = useState({});
  const [formYes, setFormYes] = useState(false);
  const [userFormSubmit, setUserFormSubmit] = useState(false);
  const [recipes, setRecipe] = useState("");
  const [bmr, setBmr] = useState(0);
  const [searchResults, setSearchResults] = useState("");

  const [displayMacros, setDisplayMacros] = useState({
    calories: 0,
    carbs: 0,
    fats: 0,
    proteins: 0,
  });

  //! ------------------------- Search Button Function ------------------------- */

  const submitHandler = (e) => {
    e.preventDefault();
    callAxios();
    setSearchResults("");
  };
  //! ---------------------------------- Axios --------------------------------- */

  let callAxios = () => {
    axios
      .get(
        `https://api.spoonacular.com/recipes/complexSearch?query=${searchResults}&apiKey=1091495abb7f4441ac92e1223fb6d917&addRecipeNutrition=true`
      )
      .then((response) => {
        setRecipe(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // 96e5de745db84be6b99c064f127b2c7e
  // 5096d3e2380a441abd75c539ea5c98e4
  // 1091495abb7f4441ac92e1223fb6d917
  // 8059132ad81c4ef2b381fe955144b976
  // 6116226f1c414d98b22766621f045154

  //! ------------------------------ Return/Routes ------------------------------ */

  return (
    <div className="App">
      <Navbar
        searchResults={searchResults}
        setSearchResults={setSearchResults}
        callAxios={callAxios}
        submitHandler={submitHandler}
      />
      <Routes>
        <Route
          path="/"
          element={
            userFormSubmit ? (
              <CardList
                userStats={userStats}
                bmr={bmr}
                setBmr={setBmr}
                callAxios={callAxios}
                recipes={recipes}
                displayMacros={displayMacros}
                setDisplayMacros={setDisplayMacros}
              />
            ) : (
              <LandingPage
                formConfirm={formYes}
                setFormYes={setFormYes}
                userFormSubmit={userFormSubmit}
                setUserFormSubmit={setUserFormSubmit}
                userStats={userStats}
                setUserStats={setUserStats}
              />
            )
          }
        />
        <Route path="/userpage" element={<UserPage userStats={userStats} displayMacros={displayMacros} bmr={bmr} />} />
      </Routes>
    </div>
  );
}

export default App;
