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
  //!Add physical
  const [bmr, setBmr] = useState(0);
  const [searchResults, setSearchResults] = useState([]);


  // useEffect(() => {
  //   axios
  //     .get(`https://api.spoonacular.com/recipes/complexSearch?query=pizza&apiKey=5096d3e2380a441abd75c539ea5c98e4&addRecipeNutrition=true`)
  //   .then(results => {
  //     console.log(results);
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });
  // }, []);


  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            userFormSubmit ? (
              <CardList userStats={userStats} bmr={bmr} setBmr={setBmr}/>
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
