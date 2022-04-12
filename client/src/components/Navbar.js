import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const Navbar = () => {
    const auth = useContext(AuthContext)
    const history = useNavigate()
    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
        history('/ ')
    }
    return (
        <nav>
            <div className="nav-wrapper blue darken-2" style={{padding: '0 2rem'}}>
                <span href="/" className="brand-logo"> Сокращение ссылок</span>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to="/create">Create</NavLink></li>
                    <li><NavLink to="/links">Links</NavLink></li>
                    <li><a href="/" onClick={logoutHandler}>Exit</a></li>
                </ul>
            </div>
        </nav>

    )
}

export default Navbar