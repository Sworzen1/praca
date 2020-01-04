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
  data: {
position:"absolute",
top:200,
left:375,
color:"white"
  },
  dataL: {
    position:"absolute",
    top:200,
    left:375,
    color:"black"
      },
  button:{
    position:"absolute",
    top:30,
    right:30,
  },
  buttonL:{
    position:"absolute",
    top:30,
    right:30,
  },

});


const Profile = () => {

const classes = useStyles();
const {Already, darkmode, Dark} = useCalories()

  return (
    <div className="container">
      <Name />
      <Specyfies />
      <Calories />
      <Progress />
      <Button onClick={Dark}>Change</Button>
      <LanguageSelector />
      <Button
            size="large"
            color="secondary"
            onClick={Already}
            className={darkmode ? classes.button : classes.buttonL}
          >
            <Text tid="logout">logout</Text>
          </Button>
      <div>
        <h1 className={ darkmode ? classes.data : classes.dataL}>{new Date().toLocaleDateString()}</h1>
      </div>
      <BMI />

    </div>
  );
};
export default Profile;
