import React from "react";
import { useCalories } from "./Calories";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import InputItem from "./InputItem"

const useStyles = makeStyles(theme => ({
  main: {
    backgroundColor: "#17161a",
    height: "100vh",
    width: "100%",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },

  container: {
    backgroundColor: "rgba(15,15,15,.8)",
    boxShadow: "15px 15px 5px 0px rgba(0,0,0,0.3)",
    padding: "15px",
    "@media(min-width:1024px)":{
      width:"30%",
      height:"60%",
      padding:"25px"
    }
  },

  
  link: {
    cursor: "pointer",
    textDecoration: "none",
    display: "inline-block",
    borderBottom: "1.5px solid #f50057",
    paddingBottom: "5px",
    marginLeft: "10px",
    // width:"47vw",
    fontSize:"13px",
    "@media(min-width:1024px)":{
      fontSize:"18px"
    }
  },
  title: {
    marginBottom: "30px"
  }
}));

const SingUp = () => {
  const { Already, GoForm } = useCalories();
  const classes = useStyles();

  const inputs = [
    {
      htmlFor:"name",
      type:"name",
      placeholder:"Enter your name",
      name:"name",
      title:"FullName",
      max:"12",
      tid:"name"
    },
  {
    htmlFor:"email",
    type:"email",
    placeholder:"Enter your email",
    name:"email",
    title:"E-Mail Adress",
    max:"12",
    tid:"email"
  },
{
  htmlFor:"password",
  type:"password",
  placeholder:"Enter your password",
  name:"password",
  title:"Password",
  max:"12",
  tid:"password"
},
]

  return (
    <div className={classes.main}>
      <div className={classes.container}>
        <h2 className={classes.title}>SingUp</h2>

        {inputs.map((item)=>{
          return(
            <InputItem
            htmlFor={item.htmlFor}
            type={item.type}
            placeholder={item.placeholder}
            name={item.name}
            title={item.title}
            max={item.max}
            tid={item.tid}
            key={item.title}
            />
          )
        })}

        <div>
          <Button size="large" color="secondary" className={classes.button} onClick={GoForm}>
            Register
          </Button>

          <div onClick={Already} className={classes.link}>
            I already have an account
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
