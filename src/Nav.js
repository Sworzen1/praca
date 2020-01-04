import React, { useContext } from "react";
import MenuItem from "./MenuItem";
import {makeStyles} from "@material-ui/core/styles"
import {LanguageContext} from "./Lang/Language"

const useStyles = makeStyles (theme => ({

    menu: {
       display: "flex",
       flexDirection:"column"
    }
}));

const Nav = () => {
const classes= useStyles();
const z = useContext(LanguageContext);

  const menu = [
    {
      title: z.dictionary.profile,
      to: "/"
    },
    {
      title: z.dictionary.foods,
      to: "/Foods"
    },
    {
      title: z.dictionary.contact,
      to: "/Contact"
    },
    {
      title:z.dictionary.form,
    to:"/Form"
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
