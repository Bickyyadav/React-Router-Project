// import React from 'react'

import { useLoaderData } from 'react-router-dom';
import Cards from '../components /UI/Cards';

const Movies = () => {
  const movieData = useLoaderData();

  return (
    <>
      <ul className="container grid grid-four--cols">
        {movieData.Search.map(curelem => {
          return <Cards key={curelem.imdbID} data={curelem} />;
        })}
      </ul>
    </>
  );
};

export default Movies;
