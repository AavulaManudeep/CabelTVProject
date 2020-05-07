import React from 'react'
import "./NavBar.css"
import {Link} from "react-router-dom";
function NavBar() {
    const naveStyle =
    {
        color: 'white',
        "text-decoration":'none'
    }
    return (
        <nav>
            <h3>Logo</h3>
            <ul className= "nav-links">
                <Link style={naveStyle} to="/signin">
                <li> Signin</li>
                </Link>
                <Link style={naveStyle} to ='/signup'>
                <li>signup</li>
                </Link>
            </ul>
        </nav>
    )
}

export default NavBar
