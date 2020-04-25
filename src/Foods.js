import React from "react";
import { Link } from "react-router-dom";
import { Text } from "./Lang/Language";

const Foods = () => {
  return (
    <div className="navbar1">
      {" "}
      <p className="menuTitle">MENU</p>
      <ul className="menu1">
        <li>
          <Link to="/breakfast">
            <i class="fas fa-egg"></i>
            <p>
              <Text tid="breakfast">Breakfast</Text>
            </p>
          </Link>
        </li>
        <li>
          <Link to="/lunch">
            <i class="fas fa-apple-alt"></i>
            <p>
              <Text tid="lunch">Lunch</Text>
            </p>
          </Link>
        </li>
        <li>
          <Link to="/dinner">
            <i class="fas fa-drumstick-bite"></i>
            <p>
              <Text tid="dinner">Dinner</Text>
            </p>
          </Link>
        </li>
        <li>
          <Link to="/snack">
            <i class="fas fa-cookie"></i>
            <p>
              <Text tid="snack">Snack</Text>
            </p>
          </Link>
        </li>
        <li>
          <Link to="/supper">
            <i class="fas fa-bread-slice"></i>
            <p>
              <Text tid="supper">Supper</Text>
            </p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Foods;
