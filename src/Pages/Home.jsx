import React from "react";
import Hero from "../Components/Hero/Hero";
import Stats from "../Components/Hero/Stats";

const Home = () => {
  return (
    <div>
      <div className="flex-1 max-w-screen-xl w-full mx-auto p-4 md:p-8 lg:p-12">
        <Hero></Hero>
      </div>
      <Stats></Stats>
    </div>
  );
};

export default Home;
