import React from "react";
import "../ErrorPage/ErrorPage.css";

const ErrorPage = () => {
  return (
    <div className="error-container">
      <h1 className="error-heading">404 - Page Not Found</h1>
      <p className="error-message">
        Oops! The page you are looking for could not be found.
      </p>
      <p className="error-suggestion">
        Please return to the <a href="/">homepage</a>.
      </p>
    </div>
  );
};

export default ErrorPage;
