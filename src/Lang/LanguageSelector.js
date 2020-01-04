import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";

import { languageOptions } from "./index";

import { LanguageContext } from "./Language";
const useStyles = makeStyles(theme => ({
  select: {
color : "white",
padding: ".25em",
border: 0,
borderBottom: "2px solid #f50057",
fontWeight: "bold",
width:"120px",
height:"45px",
borderRadius: 0,
backgroundColor:"rgba(15,15,15,.4)",
marginLeft:"30px",
position:"absolute",
top:25,
right:150
  },


}));

export default function LanguageSelector() {
  const classes = useStyles();
  const languageContext = useContext(LanguageContext);

  const handleLanguageChange = event => {
    const selectedLanguage = languageOptions.find(
      item => item.id === event.target.value
    );
    languageContext.setLanguage(selectedLanguage);
  };

  return (
    <select className={classes.select} onChange={handleLanguageChange} value={languageContext.language.id}>
      {languageOptions.map(item => (
        <option key={item.id} value={item.id}>
          {item.text}
        </option>
        
      ))}
    </select>
  );
}
