import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import {useCalories} from "./Calories";

const useStyles = makeStyles(theme => ({


  link: {
    textDecoration: "none",
       padding: 20,
    listStyle: "none",
    background: "#17161a",
    marginTop: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height:"70px",
    color:"white",
    fontSize:20,
    '&:hover':{
      borderRight:"5px solid #f50057",
    }
  },
  

}));

const MenuItem = (props) => {
  const classes = useStyles();

  return (
  
      <NavLink className={classes.li}
        to={props.pathname}
        exact
        className={classes.link}
        activeStyle={{
          background: "#17161a",
          borderRight:"5px solid #f50057",
          }}
      >
        {props.title} 
      </NavLink>
     

  );
};
export default MenuItem;
