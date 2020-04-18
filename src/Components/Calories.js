import React from "react";
import { lighten, makeStyles, withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import { useCalories } from "../Calories";
import {Text} from "../Lang/Language"

const BorderLinearProgress = withStyles({
  root: {
    height: "240px",
    width: "240px",
    borderRadius: "50%",
    backgroundColor: lighten("#ff6c5c", 0.5),
    textAlign: "center",
    background: "red",
    border: "solid 2px black",
    transform: "rotate(-90deg)",

  },
  bar: {
    borderRadius: 10,
    backgroundColor: "#ff6c5c"
  }
})(LinearProgress);

const useStyles = makeStyles(theme => ({
  main: {
    width: "100vw",
    textAlign: "center",
    margin: "auto",
    paddingTop: "60px",
    color:"white",
    position:"absolute",
    top:210,
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    '@media(min-width:768px)':{
      top:140,
      marginLeft:60,
      justifyContent:"start",
      alignItems:"none",
      width:"50vw"
     },
  },
  h3: {
    fontSize:"30px"
  }
}));

const Calories = () => {
  const classes = useStyles();
  
  const { calories, cal, v} = useCalories()

  return (
    <div className={classes.main}>
      <div className={classes.root}>
       <h1 className={classes.h3}><Text tid="calories">Calories </Text></h1>
        <BorderLinearProgress
          className={classes.margin}
          variant="determinate"
          color="secondary"
          value={v}
          
        />
         <output> {calories} / {parseInt(cal)} </output>
      </div>
    </div>
  );
};
export default Calories;
