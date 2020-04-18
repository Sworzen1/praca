import React from "react";
import Progress from "./Components/Progress";
import Calories from "./Components/Calories";
import Specyfies from "./Components/Specyfies";
import Name from "./Components/Name";
import BMI from "./Components/BMI";
import {makeStyles} from "@material-ui/core/styles";
import {useCalories} from "./Calories"
import Button from "@material-ui/core/Button"
import {Text} from "./Lang/Language";
import LanguageSelector from "./Lang/LanguageSelector";

const useStyles = makeStyles({
container:{
  backgroundColor:"#17161a",
  overflow:"hidden",
  height:"160vh",
  '@media(min-width:768px)':{
height:"100vh"
   },
},
  data: {
position:"absolute",
top:200,
left:375,
color:"white",
display:"none"
  },
  // button:{
  //   position:"absolute",
  //   top:30,
  //   right:30,
  // },
  selector:{
    display:"none",
  },

});


const Profile = () => {

const classes = useStyles();
// const {Already} = useCalories()

  return (
    <div className={classes.container}>
      <Name />
      <Specyfies />
      <BMI />
      <Calories />
      <Progress />
      <div className={classes.selector}>
      <LanguageSelector  />
      </div>
      {/* <Button
            size="large"
            color="secondary"
            onClick={Already}
            className={classes.button}
          >
            <Text tid="logout">logout</Text>
          </Button> */}
      <div>
        <h1 className={classes.data}>{new Date().toLocaleDateString()}</h1>
      </div>
      

    </div>
  );
};
export default Profile;
