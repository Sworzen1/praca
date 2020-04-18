import React from "react";
import Card1 from "./Card1";
import { makeStyles } from "@material-ui/core/styles";
import recipesbreakfast from "./recipesbreakfast.json";

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

const Breakfast = () => {
  const classes = useStyles();

  return (
    <div className={classes.main1}>
      <div className={classes.main2}>
      {recipesbreakfast.map(item=>{
        return (
          <Card1 title={item.title} description={item.description} titleRecipe={item.titleRecipe} 
          descRecipe={item.descRecipe} carbo={item.carbo} protein={item.protein} fat={item.fat} calories={item.calories} xd={item.xd}/>
        )
      })}
      </div>

    </div>
  );
};

export default Breakfast;
