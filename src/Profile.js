import React from "react";
import Progress from "./Components/Progress";
import Calories from "./Components/Calories";
import Specyfies from "./Components/Specyfies";
import Name from "./Components/Name";
import BMI from "./Components/BMI";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
  data: {
position:"absolute",
top:200,
left:375,
color:"white"
  },

});


const Profile = () => {

const classes = useStyles();

  return (
    <div className="container">
      <Name />
      <Specyfies />
      <Calories />
      <Progress />
      <div>
        <h1 className={classes.data}>{new Date().toLocaleDateString()}</h1>
      </div>
      <BMI />

    </div>
  );
};
export default Profile;
