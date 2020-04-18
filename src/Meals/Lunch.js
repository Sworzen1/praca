import React from "react";
import Card1 from "./Card1";
import { makeStyles } from "@material-ui/core/styles";
import recipeslunch from "./recipeslunch"

const useStyles = makeStyles({
  main1: {
    marginTop: "50px",
    height: "60vh",
    "@media(min-width:768px)":{
     marginTop:"70px" 
    }
  },
  main2: {
    display: "grid",
    gridTemplateColumns:"auto ",
    backgroundColor:"#17161a",
    "@media(min-width:768px)":{
      gridTemplateColumns:"auto auto"
    }
  }
});

const Lunch = () => {
  const classes = useStyles();

  return (
    <div className={classes.main1}>
      <div className={classes.main2}>
      {recipeslunch.map(item=>{
        return (
          <Card1 title={item.title} description={item.description} titleRecipe={item.titleRecipe} descRecipe={item.descRecipe}/>
        )
      })}
      </div>
    </div>
  );
};

export default Lunch;
