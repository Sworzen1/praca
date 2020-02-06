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
  button:{
    position:"absolute",
    top:30,
    right:30,
  },


});


const Profile = () => {

const classes = useStyles();
const {Already} = useCalories()

  return (
    <div className="container">
      <Name />
      <Specyfies />
      <Calories />
      <Progress />
      <LanguageSelector />
      <Button
            size="large"
            color="secondary"
            onClick={Already}
            className={classes.button}
          >
            <Text tid="logout">logout</Text>
          </Button>
      <div>
        <h1 className={classes.data}>{new Date().toLocaleDateString()}</h1>
      </div>
      <BMI />

    </div>
  );
};
export default Profile;
