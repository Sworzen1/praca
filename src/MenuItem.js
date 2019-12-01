import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";


const useStyles = makeStyles(theme => ({


  link: {
    textDecoration: "none",
   
    padding: 20,
    listStyle: "none",
    background: "yellow",
    marginTop: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    
  }
}));

const MenuItem = (props) => {
  const classes = useStyles();

  return (
  
      <NavLink className={classes.li}
        to={props.pathname}
        exact
        className={classes.link}
        activeStyle={{
          background: "white"
        }}
      >
        {props.title} 
      </NavLink>
     

  );
};
export default MenuItem;
