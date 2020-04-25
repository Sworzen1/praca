import React from "react";
import { lighten, makeStyles, withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import { useCalories } from "../Calories";
import { Text } from "../Lang/Language";

const BorderLinearProgress = withStyles({
  root: {
    height: 10,
    width: "250px",
    borderRadius: 50,
    backgroundColor: lighten("#ff6c5c", 0.5),
    textAlign: "center",
    border: "solid 2px black",
    "@media(min-width:1024px)": {
      height: 20,
      width: "400px",
    },
  },
  bar: {
    borderRadius: 20,
    backgroundColor: "#ff6c5c",
  },
})(LinearProgress);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: "auto",
  },
  ProgressBars: {
    textAlign: "center",
    width: "100vw",
    position: "absolute",
    top: 620,
    lineHeight: "1px",
    color: "white",
    display: "flex",
    margin: "auto",
    flexDirection: "column",
    height: "300px",
    "@media(min-width:768px)": {
      top: 310,
      right: "7%",
      width: "40vw",
    },
    "@media(min-width:1024px)": {
      right: 70,
    },
  },
  all: {
    marginTop: "25px",
  },
  output: {
    top: 10,
    position: "relative",
    "@media(min-width:1024px)": {
      fontSize: "20px",
    },
  },
  h4: {
    "@media(min-width:1024px)": {
      fontSize: "25px",
    },
  },
}));

const Progress = () => {
  const classes = useStyles();
  const { carbo, protein, fat, car, pro, fats, x, y, z } = useCalories();

  return (
    <div className={classes.ProgressBars}>
      <div className={classes.all}>
        <h4 className={classes.h4}>
          <Text tid="carbohydrates">Carbohydrates</Text>
        </h4>

        <div className={classes.root}>
          <BorderLinearProgress
            className={classes.margin}
            variant="determinate"
            color="secondary"
            value={x}
          />
          <output className={classes.output}>
            {" "}
            {carbo} / {parseInt(car)}{" "}
          </output>
        </div>
      </div>

      <div className={classes.all}>
        <h4 className={classes.h4}>
          <Text tid="proteins">Proteins</Text>
        </h4>
        <div className={classes.root}>
          <BorderLinearProgress
            className={classes.margin}
            variant="determinate"
            color="secondary"
            value={y}
          />
          <output className={classes.output}>
            {" "}
            {protein} / {parseInt(pro)}
          </output>
        </div>
      </div>

      <div className={classes.all}>
        <h4 className={classes.h4}>
          <Text tid="fats">Fats</Text>
        </h4>
        <div className={classes.root}>
          <BorderLinearProgress
            className={classes.margin}
            variant="determinate"
            color="secondary"
            value={z}
          />
          <output className={classes.output}>
            {" "}
            {fat} / {parseInt(fats)}{" "}
          </output>
        </div>
      </div>
    </div>
  );
};
export default Progress;
