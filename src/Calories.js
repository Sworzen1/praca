import React, { createContext, useState, useContext, useEffect } from 'react'

const CaloriesContext = createContext()

const { Provider } = CaloriesContext

const CaloriesProvider = (props) => {

    const [carbo, setCarbo] = useState(0)
    const [protein, setProtein] = useState(0)
    const [fat, setFat] = useState(0)
    const [calories, setCalories] = useState(0)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [havent, setRegister] = useState(false)
    // useEffect(() => {
    //     const caloriesFromMemory = localStorage.getItem('calories')
    //     setCalories(parseInt(caloriesFromMemory))
    // }, [])

    // useEffect(() => {
    //     const carboFromMemory = localStorage.getItem('carbo')
    //     // setCarbo(parseInt(carboFromMemory))
    // }, [])

    const addCalories = (carboToAdd,proteinToAdd, fatToAdd, caloriesToAdd) => {
        
        setCarbo(carbo + carboToAdd)
        localStorage.setItem('carbo', carbo + carboToAdd)

        setProtein(protein + proteinToAdd)
        localStorage.setItem('protein', protein + proteinToAdd)
        
        setFat(fat + fatToAdd)
        localStorage.setItem('fat', fat + fatToAdd)

        setCalories(calories + caloriesToAdd)
        localStorage.setItem('calories', calories + caloriesToAdd)
    }
    const login = () => {
        setIsLoggedIn(true)
    }
    const register = ()  => {
        setRegister(true)
    }

    return <Provider value={{ protein, addCalories, login, isLoggedIn, carbo, fat, calories, register, havent}}>
        {props.children}
    </Provider>
}

export const useCalories = () => {
    return useContext(CaloriesContext)
}

export default CaloriesProvider