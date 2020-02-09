import React from "react";
import { useCalories } from "../Calories";
import FoodTask from "./FoodTask";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {  
    color:"white" 
  },
  
});

const FoodList = () => {
  const { tasks } = useCalories();
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {tasks.length ? (
        <ul className="list">
          {tasks.map(task => {
            return <FoodTask task={task} key={task.id} />;
          })}
        </ul>
      ) : (
        <div className="no-tasks">No Foods ...</div>
      )}
    </div>
  );
};

export default FoodList;