import React from "react"
import FoodList from "./Foodes/FoodList";
import FoodForm from "./Foodes/FoodForm";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
   
   display: "flex",
   alignItems: "center",
   justifyContent: "center",
   
  },
  content: {
      position:"absolute",
    top:150,
    width:"65%",
  },
  foodform:{
      position:"absolute",
      top:0,
   

  },
  title:{
      color:"white",
      marginLeft:"30px"
  }     

});

const MyFoods =  () => {
    const classes = useStyles();

    return(
        <div className={classes.container}>
            
            <div className={classes.foodform}>
            <h1 className={classes.title}>My Foods</h1>
            <FoodForm />
            </div>
            <div className={classes.content}>
              
              <FoodList />
              </div>
        </div>
    )
}
export default MyFoods