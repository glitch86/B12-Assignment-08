import React from "react";
import useData from "../../Hooks/useData";
import Cards from "./Cards";
import { Link } from "react-router";
import { IoIosTrendingUp } from "react-icons/io";

const TrendingApp = () => {
  const { datas } = useData();
  const slicedData = datas.slice(0, 8);
  return (
    <div className="text-center my-6">
      <div className="flex justify-center">
        <div className="flex items-center gap3 text-6xl font-bold my-4">
          <h1>Trending Apps</h1>
          <span>
            <IoIosTrendingUp></IoIosTrendingUp>
          </span>
        </div>
      </div>
      <p className="text-gray-400">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 my-8">
        {slicedData.map((data) => (
          <Cards key={data.id} data={data}></Cards>
        ))}
      </div>
      <button className="btn btn-primary mx-auto ">
        <Link to="/apps">Show all</Link>
      </button>
    </div>
  );
};

export default TrendingApp;
