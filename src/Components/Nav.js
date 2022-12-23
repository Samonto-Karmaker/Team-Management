import React from "react";
import { Link } from "react-router-dom";
import "../App.css"

const Nav = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light nav-background">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className="nav-link" to="/"><b>Home</b></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/GroupedTeamMembers"><b>Team</b></Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav