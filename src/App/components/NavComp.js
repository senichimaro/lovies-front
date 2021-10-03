import * as React from "react";
import { Link } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";

// import Authentication buttons component
import AuthButton from "../auth0/AuthButton";

export default function NavBar() {
    const { isAuthenticated } = useAuth0()
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">

            <Link className="navbar-brand lovies_font fs-3" to="/">løvies</Link>            

            {
                isAuthenticated
                ? (
                    <>

                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>

                        <div className="offcanvas-body">
                            
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">

                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to="/dashboard">Link</Link>
                                </li>
                                
                                <li className="nav-item dropdown">

                                    <Link className="nav-link dropdown-toggle" to="#" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropdown
                                    </Link>

                                    <ul className="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">

                                        <li>
                                            <Link className="dropdown-item" to="#">Action</Link>
                                        </li>

                                        <li>
                                            <Link className="dropdown-item" to="#">Another action</Link>
                                        </li>

                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>

                                        <li>
                                            <Link className="dropdown-item" to="#">Something else here</Link>
                                        </li>
                                        
                                    </ul>

                                </li>
                            </ul>

                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>

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
