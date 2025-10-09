import React from "react";
import appError from "../assets/App-Error.png";
import { Link } from "react-router";

const AppError = () => {
  return (
    <div className=" max-w-screen-xl w-full mx-auto p-4 pb-0 md:p-8 md:pb-0 lg:p-12 lg:pb-0">
      <div className="flex justify-center my-8">
        <div>
          <img src={appError} alt="" />
          <div className="text-center">
            <h1 className="text-4xl font-bold">Oops, page not found!</h1>
            <p className="text-gray-500 my-4">
              The page you are looking for is not available.
            </p>
            <button className="btn btn-primary">
              <Link to="/">Return Home</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppError;
