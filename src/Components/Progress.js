import React from "react";
import { lighten, makeStyles, withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import { useCalories } from "../Calories";
import {Text} from "../Lang/Language";


const BorderLinearProgress = withStyles({
  root: {
    height: 10,
    width: "250px",
    borderRadius: 50,
    backgroundColor: lighten("#ff6c5c", 0.5),
    textAlign: "center",
    border: "solid 2px black"
  },
  bar: {
    borderRadius: 20,
    backgroundColor: "#ff6c5c"
  }
})(LinearProgress);

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(3)
  },
  ProgressBars: {
    textAlign: "center",
    width: "300px",
    position: "absolute",
    right: 20,
    top: 120,
    lineHeight:"1px" ,
    color:"white"
  },
  all:{
marginTop:"100px"
  },
}));

const Progress = () => {
  const classes = useStyles();
  const { carbo, protein, fat } = useCalories()


  return (
    <div className={classes.ProgressBars}>
      <div className={classes.all}>
        <h4 className={classes.h4}><Text tid="carbohydrates">Carbohydrates</Text></h4>
        <div className={classes.root}>
          <BorderLinearProgress
            className={classes.margin}
            variant="determinate"
            color="secondary"
            value={70}
            
          />
          <output> {carbo} / 300</output>
       
        </div>
      </div>

      <div className={classes.all}>
        <h4 className={classes.h4}><Text tid="proteins">Proteins</Text></h4>
        <div className={classes.root}>
          <BorderLinearProgress
            className={classes.margin}
            variant="determinate"
            color="secondary"
            value={50}
          />
           <output> {protein} / 300</output>
        </div>
      </div>

      <div className={classes.all}>
        <h4 className={classes.h4}><Text tid="fats">Fats</Text></h4>
        <div className={classes.root}>
          <BorderLinearProgress
            className={classes.margin}
            variant="determinate"
            color="secondary"
            value={20}
          />
           <output> {fat} / 300</output>
        </div>
      </div>
    </div>
  );
};
export default Progress;
