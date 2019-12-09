import React from "react";
import { makeStyles } from "@material-ui/core/styles";

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
    const classes = useStyles();
    return (
        <div className={classes.text}>
        <span className={classes.h1}>
            <h2 className={classes.h2}>35</h2>
          <h3>Your BMI</h3>
          <h4 className={classes.line}>Overweight</h4>
          </span>
        
      </div>
    )
}
export default BMI ;