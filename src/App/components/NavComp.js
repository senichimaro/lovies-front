import * as React from "react";
import { Link } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";

// import Authentication buttons component
import AuthButton from "../auth0/AuthButton";

import logo from '../assets/images/lovies.png'

export default function NavBar() {
    const { isAuthenticated } = useAuth0()
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">

            <div>
                <div className="container-fluid d-flex align-items-center">
                    <Link to="/">
                        <img src={logo} alt="" width="35" height="35" className="d-inline-block align-text-top" />
                    </Link>
                    <Link className="navbar-brand lovies_font fs-3" to="/">løvies</Link>
                </div>
            </div>

            {
                isAuthenticated
                ? (
                    <>

                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title lovies_font fs-1" id="offcanvasNavbarLabel">løvies</h5>
                            <div className="container-fluid">
                                <img src={logo} alt="" width="50" height="50" className="d-inline-block align-text-top" />
                            </div>
                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>

                        <div className="offcanvas-body">
                            
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">

                                <li className="nav-item">
                                    <Link className="nav-link active" to="/favorites">Favorites</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to="/later">See Later</Link>
                                </li>

                            </ul>

                        </div>
                        
                    </div>
                    
                    </>
                )
                : <AuthButton />
            }
            
            

        </div>
    </nav>
  );
}
