// import React from 'react'

import { NavLink, useLoaderData } from 'react-router-dom';

const MovieDetails = () => {
  const movieDetails = useLoaderData();
  console.log(movieDetails);

  const { Actors,Poster,Title,Type,Year,Plot,BoxOffice,imdbID,movieData } = movieDetails;

  return (
    <div>
      <li className="hero-container hero-movie-container">
        <div className="main-container">
          <div className="poster-container">
            <NavLink to="#">
              <img src={Poster} className="poster" alt={Title} />
            </NavLink>
            <div>
              <div className="ticket-container">
                <div className="ticket__container">
                  <h4 className="ticket__movie-title">{Title}</h4>
                  <p className="ticket__current-year">Type:{Year}</p>
                  <p className="ticket__current-price">Type: {imdbID  }</p>
                  <button className="ticket__buy-btn">Watch Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    </div>
  );
};

export default MovieDetails;
