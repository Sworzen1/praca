import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

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
  formfield: {
    marginBottom: "40px"
  },

  label: {
    display: "block",
    textTransform: "uppercase",
    fontSize: ".9em",
    color: "white",
    
  },
  input: {
    width: "85%",
    backgroundColor: "transparent",
    border: "none",
    color: "white",
    outline: "none",
    borderBottom: "1px solid #f50057",
    fontSize: "1em",
    fontWeight: "300",
    paddingBottom: "10px",
    marginTop: "10px",
    '&:-webkit-autofill':{
      transition:"background-color 5000s ease-in-out 0s",
      WebkitTextFillColor:"white",
      WebkitBoxShadow:"0 0 0px 1000px transparent inset"
    }
  },

}));

const Form = () => {
  const classes = useStyles();

  return (
    

  
      <div className={classes.box1}>
      <div className={classes.box2}>
  
                {/* NAME */}

      <div className={classes.formfield}>
          <label className={classes.label} htmlFor="name">
            NAME
          </label>
          <input
            type="name"
            id="name"
            className={classes.input}
            placeholder="Enter your name"
            name="name"
          ></input>
        </div>
                 {/* AGE */}
        <div className={classes.formfield}>
          <label className={classes.label} htmlFor="name">
            AGE
          </label>
          <input
            type="age"
            id="age"
            className={classes.input}
            placeholder="Enter your age"
            name="age"
          ></input>
        </div>
                {/* WEIGHT */}
        <div className={classes.formfield}>
          <label className={classes.label} htmlFor="name">
            WEIGHT
          </label>
          <input
            type="weight"
            id="weight"
            className={classes.input}
            placeholder="Enter your weight"
            name="weight"
          ></input>
        </div>
                {/* HEIGHT */}
        <div className={classes.formfield}>
          <label className={classes.label} htmlFor="name">
            HEIGHT
          </label>
          <input
            type="height"
            id="height"
            className={classes.input}
            placeholder="Enter your height"
            name="height"
          ></input>
        </div>

        <Button size="large" color="secondary" >
            Submit
          </Button>

          </div>
    </div>
  );
};

export default Form;