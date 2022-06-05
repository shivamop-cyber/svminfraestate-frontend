import React from "react";
import classes from "./nav.module.css";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const location = useLocation();

  console.log(location);

  return (
    <nav className={classes["navbar"]}>
      <div className={`${classes["navbar-container"]} ${classes["container"]}`}>
        <input type="checkbox" name="" id="" />
        <div className={classes["hamburger-lines"]}>
          <span className={`${classes["line"]} ${classes["line1"]}`}></span>
          <span className={`${classes["line"]} ${classes["line2"]}`}></span>
          <span className={`${classes["line"]} ${classes["line3"]}`}></span>
        </div>
        <ul className={classes["menu-items"]}>
          <li className={location.pathname === "/" ? classes.active : ""}>
            <Link to="/">Home</Link>
          </li>
          <li className={location.pathname === "/about" ? classes.active : ""}>
            <Link to="/about">About</Link>
          </li>
          <li className={location.pathname === "/blog" ? classes.active : ""}>
            <Link to="/blog">Blog</Link>
          </li>
          <li
            className={location.pathname === "/contactus" ? classes.active : ""}
          >
            <Link to="/contactus">Contact</Link>
          </li>
          <li
            className={location.pathname === "/services" ? classes.active : ""}
          >
            <Link to="/services">Services</Link>
          </li>
        </ul>
        <h1 className={classes["logo"]}>Navbar</h1>
      </div>
    </nav>
  );
};
export default Nav;
