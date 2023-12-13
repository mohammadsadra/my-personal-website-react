import React, {useState} from "react";
import './Header.css';
import Navbar from "../Navbar/Navbar";

const Header = () => {
    const [title, setTitle] = useState('Home');
    function changeTitle(title){
        setTitle(title);
    }
    return(
    <div className="Header">
        <Navbar changeTitle={changeTitle}></Navbar>
        <h3>{title}</h3>
    </div>
    )
};

export default Header
