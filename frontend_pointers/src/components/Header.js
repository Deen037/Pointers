import React, {useState} from "react";
import logo from "../img/logo.png";
import {Link} from "react-router-dom";
import Profile from "./header/Profile";

const Header = () => {
    return (
        <div className="headerBox">
            <header>
                <Link to="/" id="headerLink" style={{textDecoration: "none"}}>
                    <img id="headerlogo" alt="logo pointers" src={logo}/>{" "}
                    <h1>Pointers</h1>
                </Link>
            </header>
            <div className="headerRightSideBox">
                <Profile />
            </div>
        </div>
    );
};

export default Header;
