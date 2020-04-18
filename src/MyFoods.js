import React from "react"
import FoodList from "./Foodes/FoodList";
import FoodForm from "./Foodes/FoodForm";
import { makeStyles } from "@material-ui/core/styles";
import {Text} from "./Lang/Language";


const useStyles = makeStyles({

  content: {
      position:"absolute",
    top:150,
    width:"90%",
  },
  foodform:{
      position:"absolute",
      top:0,
   

  },
  title:{
      color:"white",
      position:"absolute",
      marginLeft:"15%",
      top:50,

  }     

});

const MyFoods =  () => {
    const classes = useStyles();

    return(
        <div className={classes.container}>
            
            <div className={classes.foodform}>
            <h1 className={classes.title}><Text tid="myfoods">My Foods</Text></h1>
            <FoodForm />
            </div>
            <div className={classes.content}>
              
              <FoodList />
              </div>
        </div>
    )
}
export default MyFoods