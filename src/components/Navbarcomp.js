import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbarcomp(){
    const [activeNav, setActiveNav] = useState('home');

    const changeColor = (nav) => {
        setActiveNav(nav);
    }
    return(

        <nav class="navbar navbar-expand-sm bg-white navbar-white">
        <div class="container-fluid">
            <img src="./assets/images/logo.png" width="4%" height="4%" class="mx-5"/>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon" ></span>
          </button>
          <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav ">
            <li className="nav-item">
                                <NavLink
                                    className={`nav-link fw-bold me-3 ${activeNav === 'home' ? 'text-success' : 'text-info'}`}
                                    exact
                                    to={'/'}
                                    onClick={() => changeColor('home')}>
                                    Home
                                </NavLink>
                            </li>
             <li className="nav-item">
                                <NavLink
                                    className={`nav-link fw-bold me-3 ${activeNav === 'Newarrivals' ? 'text-success' : 'text-info'}`}
                                    id="icon"
                                    to={'/Newarrivals'}
                                    onClick={() => changeColor('Newarrivals')}>
                                    New Arrivals
                                </NavLink>
                            </li>
            <li className="nav-item">
                                <NavLink
                                    className={`nav-link fw-bold me-3 ${activeNav === 'Offers' ? 'text-success' : 'text-info'}`}
                                    id="icon"
                                    to={'/Offers'}
                                    onClick={() => changeColor('Offers')}>
                                    Offers
                                </NavLink>
                            </li>
            <li className="nav-item">
                                <NavLink
                                    className={`nav-link fw-bold me-3 ${activeNav === 'Contact' ? 'text-success' : 'text-info'}`}
                                    id="icon"
                                    to={'/Contact'}
                                    onClick={() => changeColor('Contact')}>
                                    Contact
                                </NavLink>
                            </li>
              
              <li class="nav-item">
                <a class="nav-link text-danger" href="#">SALE</a>
              </li>   
            </ul>
          </div>
          <p class=" mx-2"><i class="bi-search mx-2"></i>
          <i class="bi-heart mx-2"></i>
          <i class="bi-cart mx-2"></i></p>

        </div>
      </nav>

 
    )
}
export default Navbarcomp;