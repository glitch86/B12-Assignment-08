import React, { useState } from "react";
import useData from "../../Hooks/useData";
import Cards from "../Trending/Cards";

const AllApps = () => {
  const { datas } = useData();
  const [search, setSearch] = useState('');
  const keyWord = search.trim().toLocaleLowerCase();

    const searchRes = keyWord? datas.filter(data => data.title.toLocaleLowerCase().includes(keyWord)): datas

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <span className="text-2xl font-bold">({searchRes.length}) Apps found</span>

        <label htmlFor="search" className="w-[300px]">
          <input
            id="search"
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input border border-violet-400 focus:outline-none focus:border-2"
            placeholder="Search"
          />
        </label>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3 lg:gap-4 my-8">
        {searchRes.map((data) => (
          <Cards key={data.id} data={data}></Cards>
        ))}
      </div>
    </div>
  );
};

export default AllApps;
