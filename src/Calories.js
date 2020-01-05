import React, { createContext, useState, useContext, useEffect } from "react";
const CaloriesContext = createContext();

const { Provider } = CaloriesContext;

const CaloriesProvider = props => {
  const initialName = localStorage.getItem("name");
  const initialAge = localStorage.getItem("age");
  const initialWeight = localStorage.getItem("weight");
  const initialHeight = localStorage.getItem("height");
  const initialLogin = localStorage.getItem("login");
  const initialBMI = localStorage.getItem("BMI");
  const initialCal = localStorage.getItem("CAL");
  const initialCar = localStorage.getItem("CAR");
  const initialPro = localStorage.getItem("PRO");
  const initialFats = localStorage.getItem("FATS");

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
  const [bmi, setBmi] = useState(initialBMI);
  const [cal, setCal] = useState(initialCal);
  const [car, setCar] = useState(initialCar);
  const [pro, setPro] = useState(initialPro);
  const [fats, setFats] = useState(initialFats);

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
    localStorage.setItem("CAR", car);
  }, [car]);

  useEffect(() => {
    localStorage.setItem("PRO", pro);
  }, [pro]);

  useEffect(() => {
    localStorage.setItem("FATS", fats);
  }, [fats]);

  useEffect(() => {
    localStorage.setItem("CAL", cal);
  }, [cal]);

  useEffect(() => {
    localStorage.setItem("BMI", bmi);
  }, [bmi]);

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


const calcBMI = () => {
    setBmi(weight/((height*height)/10000));
    setCal (370 + (13.7*weight) + (5*height) - (6.76*age));
    setCar ((cal*0.5)/4);
    setPro ((cal*0.3)/4);
    setFats ((cal*0.2)/9)
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
        bmi,
        calcBMI,
        cal,
        car,
        pro,
        fats

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
