import React from "react";
import { routesMap } from "~/routes";
import { Link } from "react-router-dom";

export default function() {
  return (
    <>
      <h1>Error 404, Page not found</h1>
      <hr />
      <div className="alert alert-warning">
        <p>
          Go to <Link to={routesMap.home}>Home Page</Link>
        </p>
      </div>
    </>
  );
}
