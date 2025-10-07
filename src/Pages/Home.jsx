import React from "react";
import Hero from "../Components/Hero/Hero";
import Stats from "../Components/Hero/Stats";
import TrendingApp from "../Components/Trending/TrendingApp";

const Home = () => {
  return (
    <div>
      <div className=" max-w-screen-xl w-full mx-auto p-4 pb-0 md:p-8 md:pb-0 lg:p-12 lg:pb-0">
        <Hero></Hero>
      </div>
      <Stats></Stats>
      <div className="max-w-screen-xl w-full mx-auto p-4 pb-0 md:p-8 md:pb-0 lg:p-12 lg:pb-0">
        <TrendingApp></TrendingApp>
      </div>
    </div>
  );
};

export default Home;
