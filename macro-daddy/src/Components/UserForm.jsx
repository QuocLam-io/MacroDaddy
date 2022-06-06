import React from "react";

const UserForm = ({
  userFormSubmit,
  setUserFormSubmit,
  userStats,
  setUserStats,
}) => {
  return (
    <div className="userform-parent">
      <form
        className="userform"
        onSubmit={(event) => {
          setUserFormSubmit(true);

          setUserStats({
            name: event.target[0].value,
            age: event.target[1].value,
            gender: event.target[2].value,
            height: event.target[3].value,
            weight: event.target[4].value,
            physical: event.target[5].value,
          });
        }}
      >
        <p>CREATE YOUR PROFILE</p>
        <label>Enter Your Name</label>
        <input className="form-name" type="text" placeholder="Name" />
        <p>CALCULATE HOW MANY CALORIES YOU USE DAILY</p>
        <p>Harris-Benedict Calculator</p>
        <p>
          We use your Total Daily Expenditure (TDEE) as a baseline to help
          recommend the amount of macros you can plan to consume for your weight
          loss goal.
        </p>
        <input className="form-number" type="number" placeholder="Age" />
        <select name="gender" id="gender">
          <option value="girl">Girlie</option>
          <option value="boy">Boiiii</option>
        </select>
        <input type="number" placeholder="Inches" />
        <input type="number" placeholder="Pounds" />
        <select name="physical" id="physical">
          <option value="1.2">Sedentary 🦥</option>
          <option value="1.375">Light Activity: Exercise 1-3/week 🐽</option>
          <option value="1.55">Moderately Active: Exercise 3-5/week 🐸</option>
          <option value="1.725">Very Active: Exercise 6-7/week 🦈</option>
          <option value="1.9">Lean Meat: Exercise 7+/week 🦁</option>
        </select>
        <button type="submit">I am a butt on</button>
      </form>
    </div>
  );
};

export default UserForm;
