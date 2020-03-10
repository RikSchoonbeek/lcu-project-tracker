import React from 'react'
import { Link } from "react-router-dom";

class MainMenu extends React.Component {
    render() {
        return (
            <nav className='main-menu-container'>
                <Link className="main-menu-nav-link" to="/">Board</Link>
                <Link className="main-menu-nav-link" to="/login/">Login</Link>
                <Link className="main-menu-nav-link" to="/signup/">Signup</Link>
                <Link className="main-menu-nav-link" to="/hello/">Hello</Link>
            </nav>
        )
    }
}

export default MainMenu