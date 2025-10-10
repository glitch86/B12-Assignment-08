import React from "react";
import Hero from "../Components/Installation/Hero";
import AppList from "../Components/Installation/AppList";

const Install = () => {


  return (
    <div className="max-w-screen-xl w-full mx-auto p-4 pb-0 md:p-8 md:pb-0 lg:p-12 lg:pb-0">
      <Hero></Hero>
      <AppList></AppList>
    </div>
  );
};

export default Install;
