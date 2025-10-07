import React from "react";

const Cards = ({ data }) => {
  const { image, title, ratingAvg } = data;
  return (
    <div>
      <div className="bg-white rounded-xl py-8 hover:-translate-y-3 transition-transform">
        <figure className="size-[200px] mx-auto not-only-of-type:">
          <img src={image} alt="" className="object-cover rounded-xl" />
        </figure>
        <div className="text-center">
          <h4>{title}</h4>
          <div>
            <span></span>
            <span>{ratingAvg}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
