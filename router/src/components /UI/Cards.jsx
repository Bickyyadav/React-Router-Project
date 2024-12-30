/* eslint-disable react/prop-types */
// import React from 'react'
import { NavLink } from 'react-router-dom';
import "./Card.css"


const Cards = ({ data }) => {
  
  
  const { Poster, imdbID } = data;
  
  return (
    <>
      <li className="hero-container">
        <div className="main-container">
          <div className="poster-container">
            <img src={Poster} className="poster" alt={imdbID} />
          </div>
          <div className="ticket-container">
            <div className="ticket__content">
              <NavLink to={`/movie/${imdbID}`}>
                <button className="ticket__buy-btn">Watch now</button>
              </NavLink>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};

export default Cards;
