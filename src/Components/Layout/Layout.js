import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import './Layout.css';
const Layout = ({children}) =>(
    <div>
        <Header></Header>
            <div className="Content">
             {children}
            </div>
    </div>
);

export default Layout
