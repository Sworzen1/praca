import React from "react";
import { useCalories } from "./Calories";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
main:{
    backgroundColor:"#17161a",
    height:"100vh",
    width:"100%",
    color:"white",
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
},
container:{
    backgroundColor:"rgba(15,15,15,.8)",
    width:"30%",
    height:"50%",
    boxShadow: "15px 15px 5px 0px rgba(0,0,0,0.3)"
},
label: {
    display:"block",
    textTransform: "uppercase",
    fontSize: ".9em",
    color: "white",
  },
  input: {
    width: "85%",
    backgroundColor: "transparent",
    border:"none",
    color: "white",
    outline: "none",
    borderBottom: "1px solid red",
    fontSize: "1em",
    fontWeight: "300",
    paddingBottom: "10px",
    marginTop: "10px",
  }


}));

const SingIn = () => {
  const { login } = useCalories();
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <div className={classes.container}>
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
          ></input>
        </div>

        <div>
          <button onClick={login}>Login</button>
          <div>Create your account</div>
        </div>
      </div>
    </div>
  );
};
export default SingIn;
