import React from "react";
import useData from "../../Hooks/useData";
import Cards from "../Trending/Cards";

const AllApps = () => {
  const { datas } = useData();
  console.log(datas);
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <span className="text-2xl font-bold">({datas.length}) Apps found</span>

        <input
          type="text"
          className="input border border-violet-400 focus:outline-none focus:border-2"
          placeholder="Search"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3 lg:gap-4 my-8">
        {datas.map((data) => (
          <Cards key={data.id} data={data}></Cards>
        ))}
      </div>
    </div>
  );
};

export default AllApps;
