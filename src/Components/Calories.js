import React from "react";
import { lighten, makeStyles, withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import { useCalories } from "../Calories";
import {Text} from "../Lang/Language"

const BorderLinearProgress = withStyles({
  root: {
    height: "270px",
    width: "270px",
    borderRadius: "50%",
    backgroundColor: lighten("#ff6c5c", 0.5),
    textAlign: "center",
    background: "red",
    border: "solid 2px black",
    transform: "rotate(-90deg)"
  },
  bar: {
    borderRadius: 10,
    backgroundColor: "#ff6c5c"
  }
})(LinearProgress);

const useStyles = makeStyles(theme => ({
  main: {
    width: "274px",
    textAlign: "center",
    margin: "0 auto",
    paddingTop: "60px",
    color:"white"
  },
  mainL: {
    width: "274px",
    textAlign: "center",
    margin: "0 auto",
    paddingTop: "60px",
    color:"black"
  },
}));

const Calories = () => {
  const classes = useStyles();
  
  const { calories, darkmode, weight, height, age} = useCalories()
  const cal = (370 + (13.7*weight) + (5*height) - (6.76*age));

  return (
    <div className={darkmode ? classes.main : classes.mainL}>
      <div className={classes.root}>
       <h1 className={classes.h3}><Text tid="calories">Calories </Text></h1>
        <BorderLinearProgress
          className={classes.margin}
          variant="determinate"
          color="secondary"
          value={30}
          
        />
         <output> {calories} / {parseInt(cal)} </output>
      </div>
    </div>
  );
};
export default Calories;
