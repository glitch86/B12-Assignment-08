import React from "react";
import Hero from "../Components/AppsPage/Hero";
import AllApps from "../Components/AppsPage/AllApps";

const Apps = () => {
  return (
    <div className="max-w-screen-xl w-full mx-auto p-4 pb-0 md:p-8 md:pb-0 lg:p-12 lg:pb-0">
      <Hero></Hero>
        <AllApps></AllApps>
    </div>
  );
};

export default Apps;
