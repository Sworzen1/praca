import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {Text} from "../Lang/Language";
import {useCalories} from "../Calories";

const useStyles = makeStyles(theme => ({
  main: {
    position: "absolute",
    // width: "200px",
    // paddingTop: "10px",
    // left: 340,
    color:"white",
    top:80,
    width: "100vw",
    display:"flex",
   

    
  },

  text: {
    border: "2px solid black ",
    width: "200px",
    height: "50px",
    borderRadius: 10,
    margin:"auto",
    '@media(min-width:768px)':{
      margin:15
    },
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
    textAlign: "center",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    height: "inherit",
  }
}));
const Name = () => {
  const { name} = useCalories();
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <div className={ classes.text}>
        <span className={classes.h1 }><Text tid="name">Name</Text></span>
        <span className={classes.h2}>
          <h2>{name}</h2>
        </span>
      </div>
    </div>
  );
};
export default Name;
