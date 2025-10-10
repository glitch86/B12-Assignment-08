import React, { useEffect, useState } from "react";
import useData from "../../Hooks/useData";
import ItemCard from "./ItemCard";
import { toast } from "react-toastify";

const AppList = () => {
  const { datas, loading } = useData();
  const [listItem, setListItem] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("instApps");
    const savedApps = storedData ? JSON.parse(storedData) : [];
    const filtered = datas.filter((item) =>
      savedApps.includes(String(item.id))
    );
    setListItem(filtered);
  }, [datas]);

  const handleRemove = (id, title) => {
    const storedData = localStorage.getItem("instApps");
    const savedApps = storedData ? JSON.parse(storedData) : [];
    const updated = savedApps.filter((item) => item !== String(id));
    localStorage.setItem("instApps", JSON.stringify(updated));

    const upList = listItem.filter((item) => item.id !== id);
    setListItem(upList);
    toast.success(`${title} uninstalled successfully.`);
  };

  const handleSort = (op) => {
    let sorted = [];
    if (op === "Low-High") {
      sorted = [...listItem].sort((a, b) => a.size - b.size);
    } else if (op === "High-Low") {
      sorted = [...listItem].sort((a, b) => b.size - a.size);
    } else {
      sorted = listItem;
    }

    setListItem(sorted);
  };
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1>({listItem.length}) Apps Found</h1>
        <div className="dropdown dropdown-center">
          <div tabIndex={0} role="button" className="btn m-1">
            Sort by size
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-28 p-2 shadow-lg"
          >
            <li onClick={() => handleSort("Low-High")}>
              <a>Low-High</a>
            </li>
            <li onClick={() => handleSort("High-Low")}>
              <a>Hight-Low</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="divider"></div>
      {loading ? (
        <div className="flex justify-center">
          {" "}
          <span className="loading loading-bars loading-xl"></span>
        </div>
      ) : (
        <div>
          {listItem.map((item) => (
            <ItemCard
              key={item.id}
              item={item}
              handleRemove={handleRemove}
            ></ItemCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default AppList;
