import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  main: {
    position: "absolute",
    width: "200px",
    paddingTop: "10px",
    left: 340,
    color:"white"
  },
  text: {
    border: "2px solid black ",
    width: "200px",
    height: "70px",
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
    textAlign: "center"
  },
  h2: {
    textAlign: "center"
  }
}));
const Name = () => {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <div className={classes.text}>
        <span className={classes.h1}>Name</span>
        <span className={classes.h2}>
          <h2>Weronika</h2>
        </span>
      </div>
    </div>
  );
};
export default Name;
