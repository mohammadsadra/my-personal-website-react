import React, { useState } from "react";
import './Navbar.css';
import { Link } from "react-router-dom";

const Navbar = ({changeTitle}) => {

    return(
    <ul className="Navbar">
        <li>
            <Link to="/">
                <button onClick={() => changeTitle("Home")}>Home</button>
            </Link>
        </li>
        <li>
            <Link to="/about">
                <button onClick={() => changeTitle("About Me")} >About Me</button>
            </Link>
        </li>
        <li>
        <Link to="/contact">
                <button onClick={() => changeTitle("Contact Us")}>Contact Us</button>
        </Link>
        </li>
    </ul>
)};

export default Navbar
