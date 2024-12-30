// import React from 'react'

const getMoviesDetails = async({params}) => {
    try {
        const response = await fetch(`https://www.omdbapi.com/?i=${params.movieID}&apikey=${import.meta.env.VITE_API_KEY}`);
        const data = response.json();
        return data;
      } catch (error) {
        console.log(error);
      }
  return (
    <div>getMoviesDetails</div>
  )
}

export default getMoviesDetails