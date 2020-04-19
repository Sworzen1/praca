import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { useCalories } from "./Calories";
import { Text } from "./Lang/Language";
import InputItem from "./InputItem";

const useStyles = makeStyles((theme) => ({
  box1: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  box2: {
    backgroundColor: "rgba(15,15,15,.8)",
    boxShadow: "15px 15px 5px 0px rgba(0,0,0,0.3)",
    width: "60%",
    padding: "30px",
    color: "white",
    "@media(min-width:768px)": {
      width: "35%",
    },
  },
}));

const Form = () => {
  const { addAge, addWeight, addHeight } = useCalories();
  const [titleAge, setAge] = useState("");
  const [titleWeight, setWeight] = useState("");
  const [titleHeight, setHeight] = useState("");
  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    addAge(titleAge);
    setAge("");
    addWeight(titleWeight);
    setWeight("");
    addHeight(titleHeight);
    setHeight("");
  };

  const handleChangeAge = (e) => {
    setAge(e.target.value);
  };
  const handleChangeWeight = (e) => {
    setWeight(e.target.value);
  };
  const handleChangeHeight = (e) => {
    setHeight(e.target.value);
  };

  const [age1, setAge1] = useState("");
  const [height1, setHeight1] = useState("");
  const [weight1, setWeight1] = useState("");

  useEffect(() => {
    if (localStorage.myLanguage[7] == "p") {
      setAge1("Wprowadz wiek");
      setHeight1("Wprowadz wysokosc");
      setWeight1("Wprowadz wage");
    } else {
      setAge1("Enter your age");
      setHeight1("Enter your height");
      setWeight1("Enter your weight");
    }
  });

  const inputs = [
    {
      title: "AGE",
      value: titleAge,
      placeholder: age1,
      onChange: handleChangeAge,
      tid: "age",
      max: "100",
      type: "number",
    },
    {
      title: "WEIGHT",
      value: titleWeight,
      placeholder: weight1,
      onChange: handleChangeWeight,
      tid: "weight",
      max: "300",
      type: "number",
    },
    {
      title: "HEIGHT",
      value: titleHeight,
      placeholder: height1,
      onChange: handleChangeHeight,
      tid: "height",
      max: "250",
      type: "number",
    },
  ];

  return (
    <div className={classes.box1}>
      <div className={classes.box2}>
        <form onSubmit={handleSubmit}>
        
          {inputs.map((item) => {
            return (
              <InputItem
                title={item.title}
                value={item.value}
                placeholder={item.placeholder}
                onChange={item.onChange}
                tid={item.tid}
                max={item.max}
                type={item.type}
                htmlFor={item.htmlFor}
              />
            );
          })}
          <Button size="large" color="secondary" type="submit">
            <Text tid="submit">Submit</Text>
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Form;
