import React, { createContext, useState, useContext, useEffect } from "react";

const CaloriesContext = createContext();

const { Provider } = CaloriesContext;

const CaloriesProvider = props => {
  const [login, setLogin] = useState(0);
  const [carbo, setCarbo] = useState(0);
  const [protein, setProtein] = useState(0);
  const [fat, setFat] = useState(0);
  const [calories, setCalories] = useState(0);
  const [darkmode, setDark] = useState(true);

  // useEffect(() => {
  //     const caloriesFromMemory = localStorage.getItem('calories')
  //     setCalories(parseInt(caloriesFromMemory))
  // }, [])

  // useEffect(() => {
  //     const carboFromMemory = localStorage.getItem('carbo')
  //     // setCarbo(parseInt(carboFromMemory))
  // }, [])

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
        Dark
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
