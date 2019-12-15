import React from "react";
import Card1 from "./Card1";
import { makeStyles } from "@material-ui/core/styles";
import recipesbreakfast from "./recipesbreakfast.json";

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

const Breakfast = () => {
  const classes = useStyles();

  return (
    <div className={classes.main1}>
      <div className={classes.main2}>
      {recipesbreakfast.map(item=>{
        return (
          <Card1 title={item.title} description={item.description} titleRecipe={item.titleRecipe} 
          descRecipe={item.descRecipe} carbo={item.carbo} protein={item.protein} fat={item.fat} calories={item.calories}/>
        )
      })}
      </div>

    </div>
  );
};

export default Breakfast;
