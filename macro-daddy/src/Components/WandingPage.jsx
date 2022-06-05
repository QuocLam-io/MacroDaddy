import React from "react";
import UserForm from "./UserForm";

const LandingPage = () => {
  return (
    <div className="landing-parent">
      <div className="left-landing">
        <p>WhackDADDY</p>
        <p>TO</p>
        <p>MacDADDY</p>
        <p>An evidence-based way to lose weight 🐽</p>
        <div className="start-butt">GET STARTED →</div>
      </div>
      <div className="right-landing">
          <UserForm />
      </div>
    </div>
  );
};

export default LandingPage;
