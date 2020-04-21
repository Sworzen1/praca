import React from 'react'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({

  input2: {
    width: "80px",
    backgroundColor: "transparent",
    border: "none",
    color: "white",
    outline: "none",
    border: "2px solid #f50057",
    fontSize: "1em",
    fontWeight: "300",
    padding: "10px",
    borderRadius: 35,
    marginTop:10,
    "@media(min-width:768px)":{
      width:"100px",
    }

  }
  
});

const InputFood = (props) => {
    const classes = useStyles();

  return (
   
            <input
        type="number"
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        required
        className={classes.input2}
        min="1"
        max="2000"
      />
   
  )
}

export default InputFood