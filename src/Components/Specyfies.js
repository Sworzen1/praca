import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {Text} from "../Lang/Language";
import {useCalories} from "../Calories"

const useStyles = makeStyles(theme => ({
  main: {
    display: "flex",
    width: "350px",
    paddingTop: "10px",
    margin: "0 auto",
    color:"white",
  },
  text: {
    border: "2px solid black ",
    width: "100px",
    height: "70px",
    margin: "10px",
    borderRadius: 10
  },
  text1: {
    border: "2px solid black ",
    width: "100px",
    height: "85px",
    margin: "10px",
    borderRadius: 10
  },
  h1: {
    position: "absolute",
    background: "transparent",
    marginTop: "-11px",
    marginLeft: "10px",
    width: "50px",
    background: "#17161a",
    zIndex: 1,
    textAlign: "center"
  },
  h2: {
    textAlign: "center"
  }
}));

const Specyfies = () => {
  const {age, weight, height} = useCalories();
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <div className={classes.text}>
       <span className={classes.h1}> <Text tid="age">Age</Text></span>
        <span className={classes.h2}>
          <h2>{age}</h2>
        </span>
      </div>

      <div className={classes.text1}>
        <span className={classes.h1}><Text tid="weight">Weight</Text></span>
        <span className={classes.h2}>
          <h1>{weight}</h1>
        </span>
      </div>

      <div className={classes.text}>
        <span className={classes.h1}><Text tid="height">Height</Text></span>
        <span className={classes.h2}>
          <h2>{height}</h2>
        </span>
      </div>
      
    </div>
  );
};
export default Specyfies;
