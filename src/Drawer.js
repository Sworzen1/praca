import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Nav from "./Nav";
import {useCalories} from "./Calories"


const drawerWidth = 300;

const useStyles = makeStyles(theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth,
    background: "#17161a",
    borderRight: "0px solid rgba(100, 110, 110, .5)",
    boxShadow: "15px 1px 5px 0px rgba(0,0,0,0.3)"

  },
  light: {
    width: drawerWidth,
    background: "#F5F5F5",
    borderRight: "0px solid rgba(100, 110, 110, .5)",
    boxShadow: "15px 1px 5px 0px rgba(0,0,0,0.3)"
  },
  

}));

const Drawer1 = () => {
  const {darkmode} = useCalories();
  const classes = useStyles();



  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      anchor="left"
      classes={{
        paper: darkmode ? classes.drawerPaper : classes.light
      }}
    >
      <Nav />
      
    </Drawer>
  );
};
export default Drawer1;
