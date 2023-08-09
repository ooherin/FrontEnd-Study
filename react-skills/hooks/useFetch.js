import { useState, useEffect } from "react";

const useFetch = (fetching) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); //에러 메세지를 담는다.

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetching();
        setData(response.data);
        setLoading(false);
      } catch (err) {
        setError(err); //에러 메세지를 담아준다.
        setLoading(false);
      }
    };
    fetchData();
  }, [fetching]); //fetching api가 달라질 때마다 실행함
  return { data, loading, error };
};

export default useFetch;
