import React from "react";
import MenuItem from "./MenuItem";
import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles (theme => ({

    menu: {
       display: "flex",
       flexDirection:"column"
    }
}));

const Nav = () => {
const classes= useStyles();

  const menu = [
    {
      title: "Profile",
      to: "/"
    },
    {
      title: "Foods",
      to: "/Foods"
    },
    {
      title: "Contact",
      to: "/Contact"
    }
  ];

  return (
    <nav className={classes.menu}>
      {menu.map(link => {
        return (
          <MenuItem key={link.key} title={link.title} pathname={link.to} />
        );
      })}
      
    </nav>
  );
};
export default Nav;
