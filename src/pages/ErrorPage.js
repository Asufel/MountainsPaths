import React from "react";
import "../styles/ErrorPage.sass";
const ErrorPage = () => {
  return (
    <section className="error">
      <div className="error__information">
        <h1>Error</h1>
        <p>
          {" "}
          <i class="far fa-file"></i>
        </p>
        <p>We're sorry, but there is no any page for current URL.</p>
      </div>
    </section>
  );
};

export default ErrorPage;
