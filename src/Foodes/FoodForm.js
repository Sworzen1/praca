import React, { useState} from 'react'
import { useCalories } from "../Calories";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  form:{
    display:"flex",
    flexDirection:"row"
  },
  input: {
    width: "180px",
    backgroundColor: "transparent",
    border: "none",
    color: "white",
    outline: "none",
    border: "2px solid #f50057",
    fontSize: "1em",
    fontWeight: "300",
    padding: "10px",
    marginLeft: "10px",
    borderRadius: 35

  },
  input2:{
    width: "80px",
    backgroundColor: "transparent",
    border: "none",
    color: "white",
    outline: "none",
    border: "2px solid #f50057",
    fontSize: "1em",
    fontWeight: "300",
    padding: "10px",
    marginLeft: "10px",
    borderRadius: 35

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


  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <input
        type="text"
        placeholder="Add Title...."
        value={title}
        onChange={handleTitle}
        required
        className={classes.input}
      />
            <input
        type="number"
        placeholder="Calories"
        value={calories2}
        onChange={handleCalories}
        required
        className={classes.input2}
      />
            <input
        type="number"
        placeholder="Carbos"
        value={carbos}
        onChange={handleCarbo}
        required
        className={classes.input2}
      />
            <input
        type="number"
        placeholder="Proteins"
        value={proteins}
        onChange={handleProteins}
        required
        className={classes.input2}
      />
            <input
        type="number"
        placeholder="Fats"
        value={fats2}
        onChange={handleFats}
        required
        className={classes.input2}
      />
      <div className="buttons">
        <button type="submit" className={classes.button}>
          ADD
        </button>
        
      </div>
    </form>
  )
}

export default FoodForm