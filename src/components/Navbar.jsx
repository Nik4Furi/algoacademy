import React from 'react'
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'
import UserContext from '../contexts/Users/UserContext';

function Navbar() {
    const history = useLocation();

    //    users-context-api, username,emali are used for iterating  
    // const { username } = UserContext(UserContext)
    
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                <div className="container-fluid">
                    <Link className={`navbar-brand ${history.pathname === '/' ? 'active' : ''}`} to="/">AlgoAcademy</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${history.pathname === '/' ? 'acitve' : ''}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${history.pathname === 'about' ? 'acitve' : ''}`} to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${history.pathname === 'courses' ? 'acitve' : ''}`} to="/courses">Courses</Link>
                            </li>

                        </ul>

                        {/* {!localStorage.getItem('token') ? */}
                            <form className="d-flex" >
                                <Link className={`nav-link ${history.pathname === 'register' ? 'acitve' : ''} mx-2`} aria-current="page" to="/register"><button className="btn btn-danger">Register</button></Link>

                                <Link className={`nav-link ${history.pathname === 'login' ? 'acitve' : ''}`} to="/login"><button className="btn btn-danger">Login</button></Link>
                            </form> 
                            {/* // :
                            // <form className="d-flex align-items-center justify-content-center" >
                            //       <Link className={`nav-link mx-2 py-1`} ><h5 className="text-light">hello</h5></Link>

                            //     <Link className={`nav-link mx-2 ${history.pathname === 'logout' ? 'acitve' : ''}`} to="/logout"><button className="btn btn-danger">Logout</button></Link>
                            // </form> */}

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
