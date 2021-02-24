import React, { useState } from 'react'
import { FiX, FiMenu } from "react-icons/fi";
import "./Navbar.css"
function Navbar(){

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMoblieMenu = () => setClick(false) 

    return (
        <div className="header">
            <div className="container">
                <div className="header-c">
                    <div className="logo">
                        <a href="#"> Bhatara C.</a>
                    </div>
                    <ul className={click ? "menu active": "menu"}>
                        <li className="menu-link" onClick={closeMoblieMenu}>
                            <a href="#banner-bg"> Home </a>
                        </li>
                        <li className="menu-link" onClick={closeMoblieMenu}>
                            <a href="#"> Project </a>
                        </li>
                        <li className="menu-link" onClick={closeMoblieMenu}>
                            <a href="#"> Contact Me </a>
                        </li>
                    </ul>
                    <div className="mobile-menu" onClick={handleClick}>
                        {click? (
                            <FiX />
                        ): <FiMenu />}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar 
