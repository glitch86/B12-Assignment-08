import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useData from "../Hooks/useData";
import AppError from "./AppError";
import Chart from "../Components/Chart";
import DetailsCard from "../Components/DetailsCard";
import { toast } from "react-toastify";

const AppDetails = () => {
  const [instApps, setInstApps] = useState(() => {
    const saved = localStorage.getItem("instApps");
    return saved ? JSON.parse(saved) : [];
  });

  const [disable, setDisable] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    if (instApps.includes(id)) setDisable(true);
  },[id, instApps]);
  const handleClick = () => {
    if (instApps.includes(id)) {
      return toast.success(`${title} is alredy installed`);
    }
    toast.success(`${title} installed successfully`);
    const updatedApps = [...instApps, id];

    setInstApps(updatedApps);
    localStorage.setItem("instApps", JSON.stringify(updatedApps));
    setDisable(true);
  };

  const { datas, loading } = useData();

  if (loading) {
    return <span className="loading loading-bars loading-xl mx-auto"></span>;
  }
  const appData = datas.find((data) => data.id === Number(id));

  if (!appData) {
    return <AppError></AppError>;
  }

  const {
    image,
    title,
    companyName,
    description,
    size,
    reviews,
    ratingAvg,
    downloads,
    ratings,
  } = appData;

  const rating = ratings;
  // console.log(data)

  return (
    <div className="max-w-screen-xl w-full mx-auto p-4 pb-0 md:p-8 md:pb-0 lg:p-12 lg:pb-0 my-11">
      <DetailsCard
        image={image}
        title={title}
        companyName={companyName}
        size={size}
        reviews={reviews}
        rating={rating}
        ratingAvg={ratingAvg}
        downloads={downloads}
        disable={disable}
        handleClick={handleClick}
      ></DetailsCard>
      <div className="divider"></div>
      <div className="mb-9">
        <Chart rating={rating}></Chart>
      </div>
      <div className="divider "></div>

      <div>
        <h2 className="text-gray-600 font-bold text-5xl ">Description</h2>
        <p className="my-8 text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
