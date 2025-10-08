import React from "react";
import error from "../assets/error-404.png";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router";
const Error = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex justify-center my-8">
        <div>
          <img src={error} alt="" />
          <div className="text-center">
            <h1 className="text-4xl font-bold">
                Oops, page not found!
            </h1>
            <p className="text-gray-500 my-4">
                The page you are looking for is not available.
            </p>
            <button className="btn btn-primary"><Link to="/">Go Back</Link></button>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Error;
