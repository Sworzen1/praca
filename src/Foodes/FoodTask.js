import React from 'react'
import { useCalories } from "../Calories";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  li:{
    display:"grid",
    flexDirection:"row",
    listStyle:"none",
    marginTop:"5px",
    fontSize:"10px",
    border:"2px solid black",
    borderRadius:10,
    padding:"10px",
    color:"white",
    gridTemplateRows:"auto auto auto"
    
  },
  span:{
  
    marginTop:"5px",
    marginBottom:"10px",
    // maxWidth:"310px",
    fontSize:"13px",
    wordBreak:"break-all",
    '@media(min-width:375px)':{
      fontSize:"20px"
    }
  },
  info:{
    padding:"2px",
   
  },
  progres:{
    display:"flex",
    flexDirection:"row",
    maxHeight:"30px",
    '@media(min-width:375px)':{
      fontSize:"15px"
    }
    
  },
  buttons:{
    position:"relative",
  // right:15,

  },


});

const FoodTask = ({ task }) => {
  const {addProgres, removeTask} = useCalories()
  const classes = useStyles();

  return (
    
    <li className={classes.li}>
      <span className={classes.span}>{task.title} </span>
      <div className={classes.progres}>
      <img src="https://img.icons8.com/ios/20/000000/caloric-energy--v2.png" style={{marginLeft:"2px"}} /><div className={classes.info}> : {task.calories2}</div>
        <img src="https://img.icons8.com/ios/20/000000/wheat.png" style={{marginLeft:"2px"}}/><div className={classes.info}> :  {task.carbos}</div>
        <img src="https://img.icons8.com/ios/20/000000/jamon.png" style={{marginLeft:"2px"}}/> <div className={classes.info}>: {task.proteins}</div>
        <img src="https://img.icons8.com/ios/20/000000/fish-food.png" style={{marginLeft:"2px"}}/><div className={classes.info}> : {task.fats2}</div>
        </div>
      <div className={classes.buttons}>
      <Button size="smal" color="secondary" className={classes.button}
         onClick={() => addProgres(+task.carbos, +task.proteins, +task.fats2, +task.calories2)}>
            Dodaj
          </Button>

           <Button size="large" color="secondary" className={classes.button}
         onClick={() => removeTask(task.id)}>
            <i className="fas fa-trash-alt"></i>
          </Button>

      </div>
    </li>
  
  )
}


export default FoodTask