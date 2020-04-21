import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DrawerRWD from "./DrawerRWD";
import Profile from "./Profile";
import Foods from "./Foods";
import Contact from "./Contact";
import Breakfast from "./Meals/Breakfast";
import Lunch from "./Meals/Lunch";
import Dinner from "./Meals/Dinner";
import Snack from "./Meals/Snack";
import Supper from "./Meals/Supper";
import { useCalories } from "./Calories";
import SingIn from "./SingIn";
import SingUp from "./SingUp";
import Form from "./Form";
import FormStart from "./FormStart";
import MyFoods from "./MyFoods"
import { LanguageProvider } from "./Lang/Language";

const App = () => {
  const { login } = useCalories();

  if (login == 0) {
    return <SingIn />;
  } else if (login == 1) {
    return <SingUp />;
  }
  else if (login==3){
    return <FormStart/>;
  }

  return (
    <LanguageProvider>
    <Router>
      <div className={"app"}>
        <DrawerRWD />
        <main className={"main"}>
          <Switch>
            <Route path="/MyFoods">
              <MyFoods />
            </Route>
          <Route path="/Form">
              <Form />
            </Route>
            <Route path="/supper">
              <Supper />
            </Route>
            <Route path="/snack">
              <Snack />
            </Route>
            <Route path="/dinner">
              <Dinner />
            </Route>
            <Route path="/lunch">
              <Lunch />
            </Route>
            <Route path="/breakfast">
              <Breakfast />
            </Route>
            <Route path="/Foods">
              <Foods />
            </Route>
            <Route path="/Contact">
              <Contact />
            </Route>
            <Route path="/">
              <Profile />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
    </LanguageProvider>
  );
};
export default App;
