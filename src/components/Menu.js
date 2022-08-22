import React from "react";
import logo from "./img/logo.svg";

const Menu = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark corMenu">
            <div className="container-fluid">
                <a href="" className="navbar-brand">
                    <img src={logo} className="img-fluid logo"></img>
                </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menuPrincipal">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="menuPrincipal">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a href="#" className="nav-link">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Pokemon</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Menu