import React from "react";
import { useCalories } from "./Calories";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  main: {
    backgroundColor: "#17161a",
    height: "100vh",
    width: "100%",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  formfield: {
    marginBottom: "40px"
  },
  container: {
    backgroundColor: "rgba(15,15,15,.8)",
    width: "30%",
    height: "50%",
    boxShadow: "15px 15px 5px 0px rgba(0,0,0,0.3)",
    padding: "30px"
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
    '&:-webkit-autofill':{
      transition:"background-color 5000s ease-in-out 0s",
      WebkitTextFillColor:"white",
      WebkitBoxShadow:"0 0 0px 1000px transparent inset"
    }
  },
  link: {
    cursor: "pointer",
    textDecoration: "none",
    display: "inline-block",
    borderBottom: "1.5px solid #f50057",
    paddingBottom: "5px",
    marginLeft: "30px"
  },
  title: {
    marginBottom: "50px"
  }
}));

const SingIn = () => {
  const { Register, LoggedIn } = useCalories();
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <div className={classes.container}>
        <h2 className={classes.title}>SingIn</h2>

        <div className={classes.formfield}>
          <label className={classes.label} htmlFor="email">
            E-Mail Adress
          </label>
          <input
            type="email"
            id="email"
            className={classes.input}
            placeholder="Enter your e-mail"
            name="email"
            required
          ></input>
        </div>

        <div className={classes.formfield}>
          <label className={classes.label} htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            className={classes.input}
            placeholder="Enter your password"
            name="password"
            required
          ></input>
        </div>

        <div>
          <Button
          type="submit"
            size="large"
            color="secondary"
            onClick={LoggedIn}
            className={classes.button}
          >
            Login
          </Button>

          <div onClick={Register} className={classes.link}>
            Create your account
          </div>
        </div>
      </div>
    </div>
  );
};
export default SingIn;
