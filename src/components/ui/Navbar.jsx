import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {

    const handleLogout = () => {
        //to do
        console.log('logout')
    }


    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

            <div className="container d-flex">

                <div className="d-flex flex-row">
                    <Link 
                        className="navbar-brand" 
                        to="/"
                    >
                        Asociations
                    </Link>

                    <div className="navbar-collapse">
                        <div className="navbar-nav d-flex flex-row">

                            <NavLink 
                                className={ ({ isActive }) => "nav-item nav-link " + (isActive ? 'active' : '')} 
                                to="/marvel"
                            >
                                Marvel
                            </NavLink>

                            <NavLink 
                                className={ ({ isActive }) => "ms-2 nav-item nav-link " + (isActive ? 'active' : '')} 
                                to="/dc"
                            >
                                DC
                            </NavLink>

                        </div>
                    </div>
                </div>
                
                <div className="d-flex">
                    <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                        <ul className="navbar-nav ml-auto d-flex flex-row align-items-center">
                            <span className="nav-item nav-link text-info me-3">
                                User example
                            </span>
                            <button 
                                className="nav-item nav-link btn" 
                                onClick={handleLogout}
                            >
                                Logout
                            </button>
                        </ul>
                    </div>
                </div>
            </div>
                

        </nav>
    )
}

export default Navbar;
