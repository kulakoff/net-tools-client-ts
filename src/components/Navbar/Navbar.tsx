import React from "react";
import { NavLink } from "react-router-dom";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div>
      <nav>
        {" | "}
        <NavLink to="/">Home</NavLink>
        {" | "}
        <NavLink to="/demo">Demo</NavLink>
        {" | "}
        <NavLink to="/signin">Login</NavLink>
        {" | "}
        <NavLink to="/signup">Registration</NavLink>
        {" | "}
      </nav>
    </div>
  );
};

export default Navbar;
