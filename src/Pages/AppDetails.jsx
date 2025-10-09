import React, { useState } from "react";
import { useParams } from "react-router";
import useData from "../Hooks/useData";
import AppError from "./AppError";
import iconDownloads from "../assets/icon-downloads.png";
import iconRatings from "../assets/icon-ratings.png";
import iconReview from "../assets/icon-review.png";
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const AppDetails = () => {
  const [disable, setDisable] = useState(false);
  const handleClick = () => {
    setDisable(true);
  };
  const { id } = useParams();

  const { datas, loading } = useData();

  if (loading) {
    return <h1>loading...</h1>;
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
    <div className="max-w-screen-xl w-full mx-auto p-4 pb-0 md:p-8 md:pb-0 lg:p-12 lg:pb-0">
      <div className="card card-side bg-base-100 shadow-sm">
        <figure className="p-9">
          <img className="rounded-lg" src={image} alt={title} />
        </figure>

        <div className="card-body">
          <h2 className="card-title text-4xl">{title}</h2>
          <p>
            Developed by <span className="text-violet-500">{companyName}</span>
          </p>
          <div className="divider "></div>
          <div className="flex gap-7">
            <div className="flex justify-center items-center gap-5">
              <div>
                <p className="text-gray-400">Downloads</p>
                <h1 className="text-4xl font-bold">
                  {downloads > 1000000
                    ? downloads / 1000000 + "M"
                    : downloads > 100000
                    ? downloads / 100000 + "K"
                    : ""}
                </h1>
              </div>
              <figure className="size-8">
                <img src={iconDownloads} alt="" />
              </figure>
            </div>
            <div className="flex justify-center items-center gap-5">
              <div>
                <p className="text-gray-400">Average Rating</p>
                <h1 className="text-4xl font-bold">{ratingAvg}</h1>
              </div>
              <figure className="size-8">
                <img src={iconRatings} alt="" />
              </figure>
            </div>
            <div className="flex justify-center items-center gap-5">
              <div>
                <p className="text-gray-400">Total Reviews</p>
                <h1 className="text-4xl font-bold">
                  {reviews > 1000 ? reviews / 1000 + "K" : ""}
                </h1>
              </div>
              <figure className="size-8">
                <img src={iconReview} alt="" />
              </figure>
            </div>
          </div>
          <div className="card-actions justify-start">
            <button className={`btn  bg-green-500 ${disable? 'cursor-not-allowed text-gray-100':'text-white'}`} onClick={handleClick}>
              {disable? "Installed" : "Install Now ({size}) MB"}
            </button>
          </div>
        </div>
      </div>

      {/* chart */}
      <div className="w-full h-80">
        <h2>
          Ratings
        </h2>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={[...rating].reverse()} layout="vertical" margin={{top:10, right: 30, left: 40, bottom: 0}}>
            <CartesianGrid strokeDasharray="3 3">

            </CartesianGrid>
            <XAxis type="number"></XAxis>
            <YAxis dataKey="name" type="category" ></YAxis>
            <Tooltip></Tooltip>
            <Legend></Legend>
            <Bar dataKey='count' fill="#00DFA2" barSize={20} ></Bar>

          </BarChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
};

export default AppDetails;
