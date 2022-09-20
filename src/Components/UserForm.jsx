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
            age: parseInt(event.target[1].value),
            gender: event.target[2].value,
            height: parseInt(event.target[3].value),
            weight: parseInt(event.target[4].value),
            physical: parseFloat(event.target[5].value),
          });
        }}
      >
        <p className="cYP">CREATE YOUR PROFILE</p>
        <p className="eYN">Enter Your Name</p>
        <input className="form-name" type="text" placeholder="Name" />
        <p className="calculate">CALCULATE HOW MANY CALORIES YOU USE DAILY</p>
        <p className="hBC">Harris-Benedict Calculator</p>
        <p className="explain">
          We use your <span> Total Daily Expenditure (TDEE)</span> as a
          baseline to help recommend the amount of macros you can plan to
          consume for your weight loss goal.
        </p>
        <input className="form-number" type="number" placeholder="Age" min="18"/>
        <select name="gender" id="gender">
          <option className="test" value="male">
            Daddy
          </option>
          <option value="female">Mami</option>
        </select>
        <input type="number" placeholder="Inches" />
        <input type="number" placeholder="Pounds" />
        <select name="physical" id="physical">
          <option value="1.2">Sedentary 🦥</option>
          <option value="1.375">Light Activity: Exercise 1-3/week 🐷</option>
          <option value="1.55">Moderately Active: Exercise 3-5/week 🐸</option>
          <option value="1.725">Very Active: Exercise 6-7/week 🦈</option>
          <option value="1.9">Lean Meat: Exercise 7+/week 🦁</option>
        </select>
        <button className="form-btn" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserForm;
