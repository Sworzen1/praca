import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { useCalories } from "./Calories";
import InputItem from "./InputItem"

const useStyles = makeStyles(theme => ({
  box1: {
    width: "100%",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#17161a"
  },
  box2: {
    backgroundColor: "rgba(15,15,15,.8)",
    boxShadow: "15px 15px 5px 0px rgba(0,0,0,0.3)",
    padding: "30px",
    color: "white",
    "@media(min-width:1024px)":{
      width:"30%"
    }
  },

}));

const Form = () => {
  const { addName, addAge, addWeight, addHeight, LoggedIn } = useCalories();
  const [titleName, setTitle] = useState("")
  const [titleAge,setAge] = useState("");
  const [titleWeight,setWeight] = useState("");
  const [titleHeight,setHeight] = useState("");
  const classes = useStyles();

  const handleSubmit = e => {
    e.preventDefault()
    addName(titleName);
    setTitle("");
    addAge(titleAge);
    setAge("");
    addWeight(titleWeight);
    setWeight("");
    addHeight(titleHeight);
    setHeight("");
    LoggedIn()
  };
  const handleChange = e => {
    setTitle(e.target.value);
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

  const inputs = [
    {
      title: "Nick name",
      value: titleName,
      placeholder: "Enter your nick name",
      onChange: handleChange,
      tid: "nickName",
      max: "12",
      type: "name",
      htmlFor:"name",
      name:"name"
    },
    {
      title: "AGE",
      value: titleAge,
      placeholder: "Enter your nick age",
      onChange: handleChangeAge,
      tid: "age",
      max: "100",
      type: "number",
      name:"number",
      htmlFor:"number",
    },
    {
      title: "WEIGHT",
      value: titleWeight,
      placeholder: "Enter your nick weight",
      onChange: handleChangeWeight,
      tid: "weight",
      max: "300",
      type: "number",
      name:"number",
      htmlFor:"number",
    },
    {
      title: "HEIGHT",
      value: titleHeight,
      placeholder: "Enter your nick height",
      onChange: handleChangeHeight,
      tid: "height",
      max: "250",
      type: "number",
      name:"number",
      htmlFor:"number",
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
                name={item.name}
              />
            );
          })}

          <Button size="large" color="secondary" type="submit" >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Form;
