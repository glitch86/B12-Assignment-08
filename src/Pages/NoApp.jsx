import React from "react";
import appError from "../assets/App-Error.png"

const NoApp = ({setSearch}) => {
  return (

      <div className="flex justify-center my-8">
        <div>
          <img src={appError} alt="" />
          <div className="text-center">
            <h1 className="text-4xl font-bold">Oops, page not found!</h1>
            <p className="text-gray-500 my-4">
              The page you are looking for is not available.
            </p>
            <button className="btn btn-primary" onClick={() => setSearch('')}>
              Go Back
            </button>
          </div>
        </div>
      </div>
  );
};

export default NoApp;
