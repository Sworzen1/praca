import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Text } from "./Lang/Language";

const useStyles = makeStyles((theme) => ({
  formfield: {
    marginBottom: "40px",
  },

  label: {
    display: "block",
    textTransform: "uppercase",
    fontSize: ".9em",
    color: "white",
    "@media(min-width:1024px)": {
      fontSize: "1.3em",
    },
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
      WebkitBoxShadow: "0 0 0px 1000px transparent inset",
    },
    "@media(min-width:1024px)": {
      fontSize: "1.2em",
    },
  },
}));

const InputItem = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.formfield}>
      <label className={classes.label} htmlFor={props.htmlFor}>
        <Text tid={props.tid}>props.title</Text>
      </label>

      <input
        onChange={props.onChange}
        value={props.value}
        type={props.type}
        min="1"
        max={props.max}
        className={classes.input}
        placeholder={props.placeholder}
        name={props.name}
        required
      ></input>
    </div>
  );
};
export default InputItem;
