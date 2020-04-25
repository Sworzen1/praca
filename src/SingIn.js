import React from "react";
import { useCalories } from "./Calories";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import InputItem from "./InputItem";

const useStyles = makeStyles((theme) => ({
  main: {
    backgroundColor: "#17161a",
    height: "100vh",
    width: "100%",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  container: {
    backgroundColor: "rgba(15,15,15,.8)",
    boxShadow: "15px 15px 5px 0px rgba(0,0,0,0.3)",
    padding: "15px",
    "@media(min-width:1024px)": {
      width: "30%",
      height: "50%",
      padding: "25px",
    },
  },

  link: {
    cursor: "pointer",
    textDecoration: "none",
    display: "inline-block",
    borderBottom: "1.5px solid #f50057",
    paddingBottom: "5px",
    marginLeft: "30px",
    "@media(min-width:1024px)": {
      fontSize: "18px",
    },
  },
  title: {
    marginBottom: "50px",
  },
  button: {
    textDecoration: "none",
  },
}));

const SingIn = () => {
  const { Register, LoggedIn } = useCalories();
  const classes = useStyles();

  const inputs = [
    {
      title: "E-Mail Adress",
      placeholder: "Enter your e-mail",
      tid: "email",
      max: "12",
      type: "email",
      htmlFor: "email",
      name: "email",
    },
    {
      title: "Password",
      placeholder: "Enter your password",
      tid: "password",
      max: "12",
      type: "password",
      htmlFor: "password",
      name: "password",
    },
  ];

  return (
    <div className={classes.main}>
      <div className={classes.container}>
        <h2 className={classes.title}>SingIn</h2>

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
              key={item.title}
            />
          );
        })}

        <div>
          <Link to="/" className={classes.button}>
            <Button
              type="submit"
              size="large"
              color="secondary"
              onClick={LoggedIn}
            >
              Login
            </Button>
          </Link>

          <div onClick={Register} className={classes.link}>
            Create your account
          </div>
        </div>
      </div>
    </div>
  );
};
export default SingIn;
