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
    backgroundColor: "green",
    width:'30%',
    height:'60%',
    padding:'30px',
    
  },
  h3:{
    borderBottom:'1px solid yellow',
  },
  h4:{
    lineHeight:'2px',
  }
}));

const Contact = () => {
  const classes = useStyles();

  return (
    

  
      <div className={classes.box1}>
      <div className={classes.box2}>
        <h3 className={classes.h3}>Address:</h3>
        <h4 className={classes.h4}>Swiętojańska 72/4
       <p>82-771</p>
       <p>Gdynia</p> 
        </h4>
         <h3 className={classes.h3}>Number:</h3>
         <h4 className={classes.h4}>771-912-371</h4>
          <h3 className={classes.h3}>E-mail:</h3>
          <h4 className={classes.h4}>dieta24@gmail.com</h4>
          </div>
    </div>
  );
};

export default Contact;
