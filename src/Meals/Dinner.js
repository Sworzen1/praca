import React from "react";
import FoodCard from "./FoodCard";
import { makeStyles } from "@material-ui/core/styles";
import recipesdinner from "./recipesdinner";

const useStyles = makeStyles({
  main1: {
    marginTop: "50px",
    height: "60vh",
    "@media(min-width:768px)":{
     marginTop:"70px" 
    },
    "@media(min-width:1024px)":{
      marginTop:"80px"
    }
  },
  main2: {
    display: "grid",
    gridTemplateColumns:"auto ",
    backgroundColor:"#17161a",
    "@media(min-width:768px)":{
      gridTemplateColumns:"auto auto"
    },
    "@media(min-width:1024px)":{
      gridTemplateColumns:"auto auto auto"
    },
  }
});

const Dinner = () => {
  const classes = useStyles();

  return (
    <div className={classes.main1}>
      <div className={classes.main2}>
      {recipesdinner.map(item=>{
        return (
          <FoodCard title={item.title} description={item.description} titleRecipe={item.titleRecipe} 
          descRecipe={item.descRecipe} carbo={item.carbo} protein={item.protein} fat={item.fat} calories={item.calories} image={item.image}/>
        )
      })}
      </div>
    </div>
  );
};

export default Dinner;
