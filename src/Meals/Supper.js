import React from "react";
import Card1 from "./Card1";
import { makeStyles } from "@material-ui/core/styles";
import recipessupper from "./recipessupper";

const useStyles = makeStyles({
  main1: {
    marginTop: "40px",
    height: "60vh"
  },
  main2: {
    display: "grid",
    gridTemplateColumns:"auto auto auto"
  }
});

const Supper = () => {
  const classes = useStyles();

  return (
    <div className={classes.main1}>
      <div className={classes.main2}>
      {recipessupper.map(item=>{
        return (
          <Card1 title={item.title} description={item.description} titleRecipe={item.titleRecipe} descRecipe={item.descRecipe}/>
        )
      })}
      </div>
    </div>
  );
};

export default Supper;
