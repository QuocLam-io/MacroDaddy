import React from "react";
import UserForm from "./UserForm";

const LandingPage = ({ formConfirm, setFormYes, userFormSubmit, setUserFormSubmit, userStats, setUserStats }) => {
  return (
    <div className="landing-parent">
      <div className="left-landing">
        <p>WhackDADDY</p>
        <p>TO</p>
        <p>MacDADDY</p>
        <p>An evidence-based way to lose weight 🐽</p>
        <div
          className="start-butt"
          onClick={() => {
            setFormYes(true);
          }}
        >
          CLICK ME YOU LITTLE BITCH <span>→</span>
        </div>
      </div>
      <div className="right-landing">{formConfirm && <UserForm userFormSubmit={userFormSubmit} setUserFormSubmit={setUserFormSubmit} userStats={userStats} setUserStats={setUserStats}   />}</div>
    </div>
  );
};

export default LandingPage;
