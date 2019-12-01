import React from "react";
import Progress from "./Components/Progress";
import Calories from "./Components/Calories";
import Specyfies from "./Components/Specyfies";
import Name from "./Components/Name";
import BMI from "./Components/BMI";

const Profile = () => {
  return (
    <div className="container">
      <Name />
      <Specyfies />
      <Calories />
      <Progress />
      <div>
        <h1 className="data">{new Date().toLocaleDateString()}</h1>
      </div>
      <BMI />

    </div>
  );
};
export default Profile;
