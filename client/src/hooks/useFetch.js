import { useState, useEffect } from "react";
import { publicRequest } from "../requestMethod";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await publicRequest.get(url);
        setData(res.data.data);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]); // hot reload dependent on (((URL)))

  return { data, loading, error };
};

export default useFetch;
