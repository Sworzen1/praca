import React from "react";
import { useCalories } from "../Calories";
import FoodTask from "./FoodTask";
import { makeStyles } from "@material-ui/core/styles";
import {Text} from "../Lang/Language";

const useStyles = makeStyles({
  container: {  
    color:"white",
    position:"absolute",
    top:175,

  },
  tekst:{
    width:"100vw",
    textAlign:"center"
  },
  list:{
    maxHeight:"37vh",
    overflow:"hidden",
    overflowY:"auto"
  }
  
});

const FoodList = () => {
  const { tasks } = useCalories();
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {tasks.length ? (
        <ul className={classes.list}>
          {tasks.map(task => {
            return <FoodTask task={task} key={task.id} />;
          })}
        </ul>
      ) : (
        <div className={classes.tekst}><Text tid="nofood">No Foods</Text> ...</div>
      )}
    </div>
  );
};

export default FoodList;