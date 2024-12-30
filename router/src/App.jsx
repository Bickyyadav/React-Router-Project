// import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Movies from './pages/Movies';
import Contact from './pages/Contact';
import AppLayout from './components /layout/AppLayout';
import"./App.css"
import ErrorPage from './pages/ErrorPage';
import GetApiData from './api/GetApiData';
import Product from './pages/Product';
import MovieDetails from './components /UI/MovieDetails';
import getMoviesDetails from './api/getMoviesDetails';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      errorElement: <ErrorPage/>,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/about',
          element: <About />,
        },
        {
          path: '/product',
          element: < Product/>,
        },
        {
          path: '/movie',
          element: <Movies />,
          loader: GetApiData
        },
        {
          path: '/contact',
          element: <Contact />,
        },
        {
          path: '/movie/:movieID',
          element: <MovieDetails />,
          loader: getMoviesDetails
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
