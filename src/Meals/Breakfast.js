import React from "react";
import Card1 from "./Card1";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  main1: {
    marginTop: "40px",
    height: "60vh"
  },
  main2: {
    display: "flex"
  }
});

const Breakfast = () => {
  const classes = useStyles();

  return (
    <div className={classes.main1}>
      <div className={classes.main2}>
        <Card1 />
        <Card1 />
        <Card1 />
      </div>
      <div className={classes.main2}>
        <Card1 />
        <Card1 />
        <Card1 />
      </div>
    </div>
  );
};

export default Breakfast;
