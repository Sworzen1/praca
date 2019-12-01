import React from "react";
import { Link } from "react-router-dom";


const Foods = () => {
  return (
    <div className="navbar1">
      <ul className="menu1">
        <li>
          <Link to="/breakfast">
            <i class="fas fa-egg"></i>
            <p>Breakfast</p>
          </Link>
        </li>
        <li>
        <Link to="/lunch">
            <i class="fas fa-apple-alt"></i>
            <p>Lunch</p>
          </Link>
        </li>
        <li>
           <Link to="/dinner">
            <i class="fas fa-drumstick-bite"></i>
            <p>Dinner</p>
          </Link>
        </li>
        <li>
           <Link to="/snack">
            <i class="fas fa-cookie"></i>
            <p>Snack</p>
          </Link>
        </li>
        <li>
           <Link to="/supper">
            <i class="fas fa-bread-slice"></i>
            <p>Supper</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Foods;
