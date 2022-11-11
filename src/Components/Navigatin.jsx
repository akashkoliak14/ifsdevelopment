import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from '../img/logo (2).png';



const Navigatin = () => {
    return (
        <div>
            <header className="main_menu_area">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                {/* 
                <button className='navbar-toggler' type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                   <ul className="navbar-nav">
                   <li className="nav-item">
                                    <Link className="nav-link active mx-4" to="/">Home</Link>
                                </li>
                        </ul>
                                       
                </div>   */}
                <Link className="navbar-brand" href="#"><img src={logo} alt="not found"/></Link>
                    <div className="container-fluid"  >
                        <button className="navbar-toggler bg-warning" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active mx-4" to="/">Home</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default Navigatin;
