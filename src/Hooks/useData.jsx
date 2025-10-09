import axios from "axios";
import React, { useEffect, useState } from "react";

const useData = () => {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios("/appData.json")
      .then((data) => setDatas(data.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);
  return {datas, loading, error}
};

export default useData;
