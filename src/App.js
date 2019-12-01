import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Drawer from "./Drawer";
import Profile from "./Profile";
import Foods from "./Foods";
import Contact from "./Contact";
import Breakfast from "./Meals/Breakfast";
import Lunch from "./Meals/Lunch";
import Dinner from "./Meals/Dinner";
import Snack from "./Meals/Snack";
import Supper from "./Meals/Supper";


const App = () => {
  return (
    <Router>
      <div className={"app"}>
        <Drawer />
        <main className={"main"}>
          <Switch>
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
  );
};
export default App;
