// import React from 'react'

import { NavLink } from 'react-router-dom';

const Header = () => {
  const getNavLinkStyle = ({ isActive }) => {
    return {
      color: isActive ? 'red' : 'black',
    };
  };

  return (
    <>
      <header className="section-navbar">
        <section className="top_txt">
          <div className="head container">
            <div className="head_txt">
              <p>Free shipping, 30-day return or refund guarantee.</p>
            </div>
            <div className="sing_in_up">
              <NavLink to="# ">SIGN IN</NavLink>
              <NavLink to="# ">SIGN UP</NavLink>
            </div>
          </div>
        </section>
        <div className="container">
          <div className="navbar-brand">
            <NavLink to="index.html">
              <img src="./public/images/log.png" alt="thapa eCommerce logo" className="logo" width="80%" height="auto" />
            </NavLink>
          </div>

          <nav className="navbar">
            <ul>
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/about"
                  style={({ isActive }) => {
                    console.log(isActive);

                    return {
                      color: isActive ? 'red' : 'black',
                    };
                  }}
                  className="nav-link"
                >
                  about
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/product" className="nav-link" style={getNavLinkStyle}>
                  products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className={({isActive})=>{
                    isActive? "nav-link active-link": "nav-link"
                }}>
                  contact
                </NavLink>
              </li>
              <NavLink to="/movie" className={({isActive})=>{
                    isActive? "nav-link active-link": "nav-link"
                }}>
                  movies
                </NavLink>  
              <li className="nav-item">
                <NavLink to="addToCart.html" className="nav-link add-to-cart-button" id="cartValue" />
                <i className="fa-solid fa-cart-shopping"> 0 </i>
                <NavLink />
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
