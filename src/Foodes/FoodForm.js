import React, { useState, useEffect} from 'react'
import { useCalories } from "../Calories";
import { makeStyles } from "@material-ui/core/styles";
import {Text} from "../Lang/Language";


const useStyles = makeStyles({
  form:{
    display:"flex",
    flexDirection:"column",
    width:"100vw",
    margin:"auto",
    justifyContent:"center",
    alignItems:"center",
    position:"relative",
    top:130
  },
  form2:{
    display:"grid",
    gridTemplateColumns:"auto auto",
    gridColumnGap:"10px"
  },
  input: {
    width: "210px",
    backgroundColor: "transparent",
    border: "none",
    color: "white",
    outline: "none",
    border: "2px solid #f50057",
    fontSize: "1em",
    fontWeight: "300",
    padding: "10px",
    borderRadius: 35

  },
  input2:{
    width: "90px",
    backgroundColor: "transparent",
    border: "none",
    color: "white",
    outline: "none",
    border: "2px solid #f50057",
    fontSize: "1em",
    fontWeight: "300",
    padding: "10px",
    borderRadius: 35,
    marginTop:10,
   

  },
  button:{
    width:"80px",
    height:"50px",
    borderRadius: 10,
    marginLeft: "30px",
    backgroundColor:"transparent",
    color:"#f50057",
    fontSize:"20px",
    border:"none",
    cursor:"pointer",
    marginTop:10,
    '&:hover':{
      backgroundColor:"#f50057",
      color:"black",
      opacity:".7"
    }

  }

  
});

const FoodForm = () => {
  const { addTask, editTask, editItem } = useCalories();
  const [title, setTitle] = useState('')
  const [calories2, setCalories] = useState('')
  const [carbos, setCarbos] = useState('')
  const [proteins, setProteins] = useState('')
  const [fats2, setFats] = useState('')
  const classes = useStyles();

  const handleSubmit = e => {
    e.preventDefault()
    if (!editItem) {
      addTask(title, calories2, carbos, proteins, fats2)
      setTitle('')
      setCalories('')
      setCarbos('')
      setProteins('')
      setFats('')
    } else {
      editTask(title, editItem.id)
    }
  }

  const handleTitle = e => {
    setTitle(e.target.value)
  }

  const handleCalories = e => {
    setCalories(e.target.value)
  }

  const handleCarbo = e => {
    setCarbos(e.target.value)
  }

  const handleProteins = e => {
    setProteins(e.target.value)
  }

  const handleFats = e => {
    setFats(e.target.value)
  }

  const [title1,setTitle1] = useState('')
  const [calo,setCalo] = useState('')
  const [carbo,setCarbo] = useState('')
  const [proteins1, setProteins1] = useState('')
  const [fats1, setFats1] = useState('')
  
  console.log(localStorage.myLanguage[7])
  useEffect(() => {
   if(localStorage.myLanguage[7]=="p"){
     setTitle1("Dodaj tytuł ...")
     setCalo("Kalorie")
     setCarbo("Węgle")
     setProteins1("Białka")
     setFats1("Tłuszcze")
   }
   else{
    setTitle1("Add title ...")
    setCalo("Calories")
    setCarbo("Carbos")
    setProteins1("Proteins")
    setFats1("Fats")
   }
  })


  return (
   

    <form onSubmit={handleSubmit} className={classes.form}>
      <input
        type="text"
        placeholder={title1}
        value={title}
        onChange={handleTitle}
        required
        className={classes.input}
      />
      <div className={classes.form2}>
            <input
        type="number"
        placeholder={calo}
        value={calories2}
        onChange={handleCalories}
        required
        className={classes.input2}
        min="1"
        max="2000"
      />
            <input
        type="number"
        placeholder={carbo}
        value={carbos}
        onChange={handleCarbo}
        required
        className={classes.input2}
        min="1"
        max="1000"
      />
            <input
        type="number"
        placeholder={proteins1}
        value={proteins}
        onChange={handleProteins}
        required
        className={classes.input2}
        min="1"
        max="1000"
      />
            <input
        type="number"
        placeholder={fats1}
        value={fats2}
        onChange={handleFats}
        required
        className={classes.input2}
        min="1"
        max="1000"
      />
      <div className="buttons">
        <button type="submit" className={classes.button}>
         <Text tid="add">ADD</Text>
        </button>
        </div>
      </div>
    </form>
  )
}

export default FoodForm