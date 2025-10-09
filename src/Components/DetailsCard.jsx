import React from "react";
import iconDownloads from "../assets/icon-downloads.png";
import iconRatings from "../assets/icon-ratings.png";
import iconReview from "../assets/icon-review.png";

const DetailsCard = ({
  image,
  title,
  companyName,
  size,
  reviews,
  ratingAvg,
  downloads,
  disable,
  handleClick
}) => {
  return (
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
          <button
            className={`btn  bg-green-500 ${
              disable ? "cursor-not-allowed text-gray-100" : "text-white"
            }`}
            onClick={handleClick}
          >
            {disable ? "Installed" : `Install Now (${size}) MB`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
