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


  useEffect(() => {
    const fetchAPI = async () => {
      const result = await axios(
        `https://api.spoonacular.com/recipes/complexSearch?query=pizza&apiKey=5096d3e2380a441abd75c539ea5c98e4&addRecipeNutrition=true`
      );
      setRecipe(result.data.results)
      console.log(recipe)
    };
    fetchAPI();
  },[]);


  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            userFormSubmit ? (
              <CardList 
              userStats={userStats} />
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

