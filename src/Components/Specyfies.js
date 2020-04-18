import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {Text} from "../Lang/Language";
import {useCalories} from "../Calories"

const useStyles = makeStyles(theme => ({
  main: {
    display: "flex",
    position:"absolute",
    width: "100vw",
   top:130,
    color:"white",
    '@media(min-width:768px)':{
      top:80,
      width:"50vw",
      right:"0"
      // justifyContent:"center",
      // alignItems:"center",
      // marginLeft:"25%"
    },

  },
  text: {
    border: "2px solid black ",
    width: "100px",
    height: "50px",
    margin:"auto",
    borderRadius: 10,

  },
  text1: {
    border: "2px solid black ",
    width: "100px",
    height: "65px",
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
    textAlign: "center",
    fontSize:15
  },
  h2: {
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    height:"inherit"
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
