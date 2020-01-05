import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {Text} from "../Lang/Language";
import {useCalories} from "../Calories";

const useStyles = makeStyles(theme => ({
text :{
width:"100px",
height:"120px",
display:'flex',
alignItems:'center',
justifyContent:'center',
border:"2px solid black",
borderRadius:10,
position:"absolute",
top:400,
left:400,
color:"white",
},
textL :{
    width:"100px",
    height:"120px",
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    border:"2px solid black",
    borderRadius:10,
    position:"absolute",
    top:400,
    left:400,
    color:"black",
    },
h1:{

textAlign:'center',
lineHeight:'2px',
},





line:{
 borderBottom:'2px solid red',
 lineHeight:'20px',
}
}));


const BMI = () => {
    
    const {darkmode, bmi} = useCalories();
    const classes = useStyles();
    return (
        <div className={darkmode ? classes.text : classes.textL}>
        <span className={classes.h1}>
            <h2 className={classes.h2}>{parseInt(bmi)}</h2>
          <h3><Text tid="bmi">Your BMI</Text></h3>
          <h4 className={classes.line}><Text tid="overweight">Overweight</Text></h4>
          </span>
        
      </div>
    )
}
export default BMI ;