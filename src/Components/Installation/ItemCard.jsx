import React from "react";
import iconDownloads from "../../assets/icon-downloads.png";
import iconRatings from "../../assets/icon-ratings.png";

const ItemCard = ({ item, handleRemove  }) => {
  const {id, image, title, downloads, ratingAvg, size} = item;

  return (
    <div>
      <div className="flex items-center rounded-xl bg-base-100 shadow-sm my-6 p-4">
        <figure className=" h-[60px]">
          <img className="rounded-lg h-full" src={image} alt={title} />
        </figure>

        <div className="flex-1">
          <div>
            <div className="mx-2">
              <h2 className=" text-md">{title}</h2>
              <div className="flex gap-1">
                <div className="flex justify-center items-center gap-1">
                  <div>
                    <h1 className="text-sm text-green-700">
                      {downloads > 1000000
                        ? downloads / 1000000 + "M"
                        : downloads > 100000
                        ? downloads / 100000 + "K"
                        : ""}
                    </h1>
                  </div>
                  <figure className="size-[12px]">
                    <img src={iconDownloads} alt="" />
                  </figure>
                </div>
                <div className="flex justify-center items-center gap-1">
                  <div>
                    <h1 className="text-sm text-yellow-500">{ratingAvg}</h1>
                  </div>
                  <figure className="size-[12px]">
                    <img src={iconRatings} alt="" />
                  </figure>
                </div>
                <div className="flex justify-center items-center gap-5">
                  <div className="flex gap-2 text-sm text-gray-400">
                    <h1 className="text-sm">{size}</h1>
                    <p>MB</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
            <div className="">
              <button className="btn bg-green-400 text-white" onClick={() => handleRemove(id, title)}>Uninstall</button>
            </div>
      </div>
    </div>
  );
};

export default ItemCard;
