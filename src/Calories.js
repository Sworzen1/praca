import React, { createContext, useState, useContext, useEffect } from "react";
const CaloriesContext = createContext();

const { Provider } = CaloriesContext;

const CaloriesProvider = props => {
  const initialName = localStorage.getItem("name");
  const initialAge = localStorage.getItem("age");
  const initialWeight = localStorage.getItem("weight");
  const initialHeight = localStorage.getItem("height");
  const initialLogin = localStorage.getItem("login");

  const [login, setLogin] = useState(initialLogin);
  const [carbo, setCarbo] = useState(0);
  const [protein, setProtein] = useState(0);
  const [fat, setFat] = useState(0);
  const [calories, setCalories] = useState(0);
  const [darkmode, setDark] = useState(true);
  const [name, setName] = useState(initialName);
  const [age, setAge] = useState(initialAge);
  const [weight, setWeight] = useState(initialWeight);
  const [height, setHeight] = useState(initialHeight);
  const [car, setCar] = useState(0)
  const [pro, setPro] = useState(0)
  const [fats, setFats] = useState(0)
  const [cal, setCal] = useState(0)
  const [y, setY] = useState(0)
  const [z, setZ] = useState(0)
  const [v, setV] = useState(0)
  const [x , setX]= useState(0)
  const [bmi, setBmi] = useState(0)
  const [TextBMI, SetTextBMI] = useState(0)

  useEffect(()=>{
    setCar(((370 + (13.7*weight) + (5*height) - (6.76*age)) * 0.5) / 4)
    setPro(((370 + (13.7*weight) + (5*height) - (6.76*age)) * 0.3) / 4)
    setFats(((370 + (13.7*weight) + (5*height) - (6.76*age)) * 0.20) / 9)
    setCal( (370 + (13.7*weight) + (5*height) - (6.76*age)))
  })

  useEffect(()=>{
    setBmi (weight/((height*height)/10000))
    
    if(bmi<19){
      SetTextBMI("Underweight")
    }
    else if(bmi<=25){
      SetTextBMI('Normal')
    }
    else if(bmi <= 30){
      SetTextBMI('Overweight')
    }
    else if (bmi>30){
      SetTextBMI('Obese')
    }
    else {
     SetTextBMI("NaN")
    }
  })
  
  useEffect(()=>{
      setX(carbo * 100 / car)
      if(carbo>car){
        setX(100)
      }

      setY(protein * 100 / pro)
      if(protein>pro){
        setY(100)
      }

      setZ(fat * 100 / fats)
      if(fat>fats){
        setZ(100)
      }

      setV(calories * 100 / cal)
      if(calories>cal){
        setV(100)
      }
    
  })
  
  const addName = titleName => {
    setName(titleName);
  };

  const addAge = titleAge => {
    setAge(titleAge);
  };

  const addWeight = titleWeight => {
    setWeight(titleWeight);
  };

  const addHeight = titleHeight => {
    setHeight(titleHeight);
  };

  useEffect(() => {
    localStorage.setItem("login", login);
  }, [login]);

  useEffect(() => {
    localStorage.setItem("age", age);
  }, [age]);

  useEffect(() => {
    localStorage.setItem("name", name);
  }, [name]);

  useEffect(() => {
    localStorage.setItem("weight", weight);
  }, [weight]);

  useEffect(() => {
    localStorage.setItem("height", height);
  }, [height]);

  useEffect(() => {
    const carboFromMemory = localStorage.getItem("carbo");
    setCarbo((carboFromMemory));
  }, []);

  useEffect(() => {
    const proteinFromMemory = localStorage.getItem("protein");
    setProtein((proteinFromMemory));
  }, []);

  useEffect(() => {
    const fatFromMemory = localStorage.getItem("fat");
    setFat((fatFromMemory));
  }, []);

  useEffect(() => {
    const caloriesFromMemory = localStorage.getItem("calories");
    setCalories((caloriesFromMemory));
  }, []);
  
  const addCalories = (carboToAdd, proteinToAdd, fatToAdd, caloriesToAdd) => {
    setCarbo(carbo + carboToAdd);
    localStorage.setItem("carbo", carbo + carboToAdd);

    setProtein(protein + proteinToAdd);
    localStorage.setItem("protein", protein + proteinToAdd);

    setFat(fat + fatToAdd);
    localStorage.setItem("fat", fat + fatToAdd);

    setCalories(calories + caloriesToAdd);
    localStorage.setItem("calories", calories + caloriesToAdd);
  };

  const Dark = () => {
    setDark(!darkmode);
  };

  const LoggedIn = () => {
    setLogin(2);
  };

  const Register = () => {
    setLogin(1);
  };
  
  const Already = () => {
    setLogin(0);
  };

  return (
    <Provider
      value={{
        Already,
        Register,
        protein,
        addCalories,
        carbo,
        fat,
        calories,
        login,
        LoggedIn,
        darkmode,
        Dark,
        addName,
        name,
        addAge,
        age,
        addHeight,
        height,
        addWeight,
        weight,
        car,
        pro,
        fats,
        cal,
        x,
        y,
        z,
        v,
        bmi,
        TextBMI
      }}
    >
      {props.children}
    </Provider>
  );
};

export const useCalories = () => {
  return useContext(CaloriesContext);
};

export default CaloriesProvider;
