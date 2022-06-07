import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import { Link, Route, Routes, Navigate } from "react-router-dom";
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
  const [recipe, setRecipe] = useState({});
  const [bmr, setBmr] = useState(0);
  const [searchResults, setSearchResults] = useState("");

  let callAxios = () => {
    axios
      .get(
        `https://api.spoonacular.com/recipes/complexSearch?query=${searchResults}&apiKey=1091495abb7f4441ac92e1223fb6d917&addRecipeNutrition=true`
      )
      .then((response) => {
        // console.log(response.data.results);
        console.log(response.data.results[0].nutrition.nutrients[0].amount); //Calories
        console.log(response.data.results[0].nutrition.nutrients[8].amount); //Protein
        console.log(response.data.results[0].nutrition.nutrients[1].amount); //Fat
        console.log(response.data.results[0].nutrition.nutrients[3].amount); //Carbs
        console.log(response.data.results[0].image); //Image
        console.log(response.data.results[0].title); //Name
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
  // callAxios();

  return (
    <div className="App">
      <Navbar
        searchResults={searchResults}
        setSearchResults={setSearchResults}
        callAxios={callAxios}
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
        <Route path="/userpage" element={<UserPage />} />
      </Routes>
    </div>
  );
}

export default App;
