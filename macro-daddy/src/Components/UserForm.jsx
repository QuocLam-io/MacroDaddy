import React from "react";

const UserForm = () => {
  return (
    <div className="userform-parent">
      <form className="userform" action="">
        <p>CREATE YOUR PROFILE</p>
        <p>Enter Your Name</p>
        <input type="form" placeholder="Name" />
        <p>CALCULATE HOW MANY CALORIES YOU USE DAILY</p>
        <p>Harris-Benedict Calculator</p>
        <p>
          We use your Tota Daily Expenditure (TDEE) as a baseline to help
          recommend the amount of macros you can plan to consume for your weight
          loss goal.
        </p>
        <input type="number" placeholder="age" />
        <select name="gender" id="gender">
          //!Look up pokedex for blank option!
          <option value="">Gender</option>
          <option value="girl">Girlie</option>
          <option value="boy">Boiiii</option>
        </select>
        <input type="number" placeholder="inches" />
        <input type="number" placeholder="pounds" />
        <select name="physical" id="physical">
          <option value="">Physical Activity Level</option>
          <option value="">Super Fattie</option>
          <option value="">Semi Fattie</option>
          <option value="">Normal Fattie</option>
          <option value="">Not Fattie</option>
          <option value="">Lean Meat</option>
        </select>
        <input type="submit" />
      </form>
    </div>
  );
};

export default UserForm;
