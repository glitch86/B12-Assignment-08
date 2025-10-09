import React from "react";
import { FaDownload, FaStar } from "react-icons/fa";
import { Link } from "react-router";

const Cards = ({ data }) => {
  const { image, title, ratingAvg, downloads, id } = data;
  const download = Number(downloads);
  return (
    <div>
      <Link to={`/apps/${id}`}>
        <div className="bg-white rounded-xl py-8 hover:-translate-y-3 transition-transform">
          <figure className="size-[200px] mx-auto not-only-of-type:">
            <img src={image} alt="" className="object-cover rounded-xl" />
          </figure>
          <div className="text-center px-6 my-3">
            <h4>{title}</h4>
            <div className="flex justify-between items-center mt-5">
              <span className="bg-gray-100 text-green-500 px-4 py-1 rounded-lg flex items-center gap-1">
                <FaDownload></FaDownload>{" "}
                {download > 1000000
                  ? download / 1000000 + "M"
                  : download > 100000
                  ? download / 100000 + "K"
                  : ""}
              </span>
              <span className="bg-yellow-100 text-yellow-500 px-4 py-1 rounded-lg flex items-center gap-1">
                <FaStar></FaStar> {ratingAvg}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Cards;
