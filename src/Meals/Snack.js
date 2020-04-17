import React from "react";
import Card1 from "./Card1";
import { makeStyles } from "@material-ui/core/styles";
import recipessnack from "./recipessnack"

const useStyles = makeStyles({
  main1: {
    marginTop: "40px",
    height: "60vh"
  },
  main2: {
    display: "grid",
    gridTemplateColumns:"auto ",
    backgroundColor:"#17161a"
  }
});

const Snack = () => {
  const classes = useStyles();

  return (
    <div className={classes.main1}>
      <div className={classes.main2}>
      {recipessnack.map(item=>{
        return (
          <Card1 title={item.title} description={item.description} titleRecipe={item.titleRecipe} descRecipe={item.descRecipe}/>
        )
      })}
      </div>
    </div>
  );
};

export default Snack;
