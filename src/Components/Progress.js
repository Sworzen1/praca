import React from "react";
import { lighten, makeStyles, withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import { display } from "@material-ui/system";

const BorderLinearProgress = withStyles({
  root: {
    height: 10,
    width: "250px",
    borderRadius: 50,
    backgroundColor: lighten("#ff6c5c", 0.5),
    textAlign: "center",
    border: "solid 2px "
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
    height: "242px",
    width: "300px",
    position: "absolute",
    right: 20,
    top: 250
  }
}));

const Progress = () => {
  const classes = useStyles();
  return (
    <div className={classes.ProgressBars}>
      <div className={classes.all}>
        <h4 className={classes.h4}>Weglowodany</h4>
        <div className={classes.root}>
          <BorderLinearProgress
            className={classes.margin}
            variant="determinate"
            color="secondary"
            value={80}
          />
        </div>
      </div>

      <div className={classes.all}>
        <h4 className={classes.h4}>Białko</h4>
        <div className={classes.root}>
          <BorderLinearProgress
            className={classes.margin}
            variant="determinate"
            color="secondary"
            value={50}
          />
        </div>
      </div>

      <div className={classes.all}>
        <h4 className={classes.h4}>Tłuszcze</h4>
        <div className={classes.root}>
          <BorderLinearProgress
            className={classes.margin}
            variant="determinate"
            color="secondary"
            value={20}
          />
        </div>
      </div>
    </div>
  );
};
export default Progress;
