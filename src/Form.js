import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({

box1: {
   width:'100%',
    height:'100%',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',

  },
  box2: {
    backgroundColor: "rgba(15,15,15,.8)",
    boxShadow: "15px 15px 5px 0px rgba(0,0,0,0.3)",
    width:'30%',
    height:'60%',
    padding:'30px',
    color:"white"
    
  },

}));

const Form = () => {
  const classes = useStyles();

  return (
    

  
      <div className={classes.box1}>
      <div className={classes.box2}>
  
          </div>
    </div>
  );
};

export default Form;