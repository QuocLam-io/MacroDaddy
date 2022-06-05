import logo from "./logo.svg";
import React, { useState } from "react";
import { Link, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import CardList from "./Components/CardList";
import LandingPage from "./Components/WandingPage";
import UserPage from "./Components/UserPage";

function App() {
  const [formYes, setFormYes] = useState(false);
  const [userFormSubmit, setUserFormSubmit] = useState(false);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={ userFormSubmit ? ( <CardList /> ) : ( <LandingPage
                formConfirm={formYes}
                setFormYes={setFormYes}
                userFormSubmit={userFormSubmit}
                setUserFormSubmit={setUserFormSubmit}
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
