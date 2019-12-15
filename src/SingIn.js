import React from "react";
import {useCalories} from "./Calories"


const SingIn = () => {
    const {login } = useCalories()
    return (
<button onClick={login}>Click</button>
    )
}
export default SingIn