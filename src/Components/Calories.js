import React from "react";
import { lighten, makeStyles, withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const BorderLinearProgress = withStyles({
  root: {
    height: "270px",
    width: "270px",
    borderRadius: "50%",
    backgroundColor: lighten("#ff6c5c", 0.5),
    textAlign: "center",
    background: "red",
    border: "solid 2px black",
    transform: "rotate(-90deg)"
  },
  bar: {
    borderRadius: 10,
    backgroundColor: "#ff6c5c"
  }
})(LinearProgress);

const useStyles = makeStyles(theme => ({
  main: {
    width: "274px",
    textAlign: "center",
    margin: "0 auto",
    paddingTop: "60px",
    color:"white"
  },
}));

const Calories = () => {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <div className={classes.root}>
        <h1 className={classes.h3}>Calories</h1>
        <BorderLinearProgress
          className={classes.margin}
          variant="determinate"
          color="secondary"
          value={30}
        />
      </div>
    </div>
  );
};
export default Calories;
