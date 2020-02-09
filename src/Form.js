import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { useCalories } from "./Calories";
import {Text} from "./Lang/Language";

const useStyles = makeStyles(theme => ({
  box1: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  box2: {
    backgroundColor: "rgba(15,15,15,.8)",
    boxShadow: "15px 15px 5px 0px rgba(0,0,0,0.3)",
    width: "30%",
    height: "45%",
    padding: "30px",
    color: "white"
  },
  formfield: {
    marginBottom: "40px"
  },

  label: {
    display: "block",
    textTransform: "uppercase",
    fontSize: ".9em",
    color: "white"
  },
  input: {
    width: "85%",
    backgroundColor: "transparent",
    border: "none",
    color: "white",
    outline: "none",
    borderBottom: "1px solid #f50057",
    fontSize: "1em",
    fontWeight: "300",
    paddingBottom: "10px",
    marginTop: "10px",
    "&:-webkit-autofill": {
      transition: "background-color 5000s ease-in-out 0s",
      WebkitTextFillColor: "white",
      WebkitBoxShadow: "0 0 0px 1000px transparent inset"
    }
  }
}));

const Form = () => {
  const { addAge, addWeight, addHeight } = useCalories();
  const [titleAge,setAge] = useState("");
  const [titleWeight,setWeight] = useState("");
  const [titleHeight,setHeight] = useState("");
  const classes = useStyles();

  const handleSubmit = e => {
    e.preventDefault()
    addAge(titleAge);
    setAge("");
    addWeight(titleWeight);
    setWeight("");
    addHeight(titleHeight);
    setHeight("");
  };

  const handleChangeAge = e => {
    setAge(e.target.value);
  };
  const handleChangeWeight = e => {
    setWeight(e.target.value);
  };
  const handleChangeHeight = e => {
    setHeight(e.target.value);
  };

  return (
    <div className={classes.box1}>
      <div className={classes.box2}>
        <form onSubmit={handleSubmit}>    
          {/* AGE */}
          <div className={classes.formfield}>
            <label className={classes.label} htmlFor="name">
              <Text tid="age">AGE</Text>
            </label>
            <input
            onChange={handleChangeAge}
            value={titleAge}
              type="number"
              min="1"
              max="100"
              id="age"
              className={classes.input}
              placeholder="Enter your age"
              name="age"
              required
            ></input>
          </div>
          {/* WEIGHT */}
          <div className={classes.formfield}>
            <label className={classes.label} htmlFor="name">
            <Text tid="weight">WEIGHT</Text>
            </label>
            <input
              onChange={handleChangeWeight}
              value={titleWeight}
              type="number"
              min="1"
              max="500"
              id="weight"
              className={classes.input}
              placeholder="Enter your weight"
              name="weight"
              required
            ></input>
          </div>
          {/* HEIGHT */}
          <div className={classes.formfield}>
            <label className={classes.label} htmlFor="name">
            <Text tid="height">HEIGHT</Text>
            </label>
            <input
              onChange={handleChangeHeight}
              value={titleHeight}
              type="number"
              min="1"
              max="250"
              id="height"
              className={classes.input}
              placeholder="Enter your height"
              name="height"
              required
            ></input>
          </div>

          <Button size="large" color="secondary" type="submit">
            <Text tid="submit">Submit</Text>
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Form;
