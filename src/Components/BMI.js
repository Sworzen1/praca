import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Text } from "../Lang/Language";
import { useCalories } from "../Calories";

const useStyles = makeStyles((theme) => ({
  main: {
    width: "100vw",
    height: "70px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    position: "absolute",
    top: 225,
    color: "white",
    "@media(min-width:768px)": {
      top: 160,
    },
    "@media(min-width:1024px)": {
      top: 200,
    },
  },

  text: {
    border: "2px solid black ",
    width: "60%",
    height: "50px",
    borderRadius: 10,
    margin: "auto",
    "@media(min-width:768px)": {
      width: "30%",
    },
    "@media(min-width:1024px)": {
      height: "70px",
      fontSize: 20,
    },
  },

  h1: {
    position: "absolute",
    background: "transparent",
    marginTop: "-11px",
    marginLeft: "15px",
    width: "40px",
    background: "#17161a",
    zIndex: 1,
    textAlign: "center",
    fontSize: 15,
    "@media(min-width:1024px)": {
      fontSize: 18,
      width: "70px",
    },
  },
  h2: {
    display: "flex",
    alignItems: "center",
    height: "inherit",
    justifyContent: "space-around",
  },
  line: {
    borderBottom: "2px solid red",
    lineHeight: "20px",
  },
}));

const BMI = () => {
  var BMItext = "NaN";
  const { bmi } = useCalories();

  if (bmi < 19) {
    BMItext = "Underweight";
  } else if (bmi <= 25) {
    BMItext = "Normal";
  } else if (bmi <= 30) {
    BMItext = "Overweight";
  } else if (bmi > 30) {
    BMItext = "Obese";
  } else {
    BMItext = "NaN";
  }

  const classes = useStyles();
  return (
    <div className={classes.main}>
      <div className={classes.text}>
        <span className={classes.h1}>BMI</span>
        <span className={classes.h2}>
          <h2>{parseInt(bmi)}</h2>
          <h4 className={classes.line}>
            <Text tid={BMItext}></Text>
          </h4>
        </span>
      </div>
    </div>
  );
};
export default BMI;
