import React from "react";
import Progress from "./Components/Progress";
import Calories from "./Components/Calories";
import Specyfies from "./Components/Specyfies";
import Name from "./Components/Name";
import BMI from "./Components/BMI";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    backgroundColor: "#17161a",
    overflow: "hidden",
    height: "160vh",
    "@media(min-width:768px)": {
      height: "100vh",
    },
  },
});

const Profile = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Name />
      <Specyfies />
      <BMI />
      <Calories />
      <Progress />
      <div className={classes.selector}></div>
    </div>
  );
};
export default Profile;
