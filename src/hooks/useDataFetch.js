import axios from "axios";
import { useEffect, useState } from "react";
const APITOKEN = import.meta.env.VITE_API_KEY;

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${APITOKEN}`,
  },
};
const useDataFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    
    try {
      
      const response = await axios.get(url, options);
      
      setData(response.data);
      
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  const refetch = () => {
    fetchData();
  };
  return { data, error, isLoading, refetch };
};
export default useDataFetch;
