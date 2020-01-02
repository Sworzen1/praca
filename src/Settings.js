import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LanguageSelector from "./Lang/LanguageSelector";
import {Text} from "./Lang/Language";

const useStyles = makeStyles (theme => ({
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

}))

const Settings = () => {

 const classes = useStyles();
 const [age, setAge] = React.useState('');
  const handleChange = event => {
    setAge(event.target.value);
  }
    return (
<div className={classes.box1}>
    <div className={classes.box2}>
     <Text tid="language"> Language</Text>:
<LanguageSelector />
    </div>
    </div>
    )
}
export default Settings;