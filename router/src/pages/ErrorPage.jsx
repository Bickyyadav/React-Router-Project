// import React from 'react'

import { useNavigate, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  const handleClickButton = () => {
    navigate(-1);
  };

  if (error.status === 404) {
    return (
      <section className="error-section">
        <div id="error-text">
          <figure>
            <img src="https://cdn.dribbble.com/users/722246/screenshots/3066818/404-page.gif" alt="404page error" />
          </figure>
          <div className="text-conter">
            <p className="p-a">. The page you were looking for could not be found</p>
            <p className="p-b">.... Back to previous page</p>
          </div>
        </div>
        {/* //----------------------------------this make me move to the first page so we dont do this inplace we do the usenagivate to go back onestep  */}
        {/* <NavLink  to="/" className="btn">Go Back to Home Page</NavLink> */}

        <button className="btn" onClick={handleClickButton}>
          {' '}
          GO Back
        </button>
      </section>
    );
  }

  return (
    <>
      <div>The page you are looking doesnot exist </div>
    </>
  );
};

export default ErrorPage;
