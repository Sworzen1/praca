import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LanguageSelector from "./Lang/LanguageSelector";
import {Text} from "./Lang/Language";
import Button from '@material-ui/core/Button';
import {useCalories} from "./Calories";




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
       boxL:{
        backgroundColor: "rgba(150,150,150,.8)",
        boxShadow: "15px 15px 5px 0px rgba(0,0,0,0.3)",
        width:'30%',
        height:'60%',
        padding:'30px',
        color:"black"
       }

}))

const Settings = () => {
  const { darkmode, Dark} = useCalories();
 const classes = useStyles();


    return (
<div className={classes.box1}>
    <div className={ darkmode ? classes.box2 : classes.boxL}>
     <Text tid="language"> Language</Text>:
<LanguageSelector /><br/>

<Button onClick={Dark}>Change</Button>
    </div>
    </div>
    )
}
export default Settings;