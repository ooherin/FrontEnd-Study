import { FC, Suspense } from "react";
import { useQuery, QueryFunction } from "react-query";

const cacheKey = Math.random().toString();

const fetcher = ({ type, id, delay }) => {
  const url = `https://jsonplaceholder.typicode.com/${type}s/${id}?_delay=${delay}&cache=${cacheKey}`;
  return fetch(url).then((res) => res.json());
};

const User = ({ id, delay }) => {
  const { data, error } = useQuery(["user", id, delay], fetcher, {
    suspense: true,
  });
  if (error) {
    return <div>유저 정보를 불러오는데 실패했습니다!</div>;
  }
  return <div>User : {data?.name}</div>;
};

export const SuspenseEx = () => {
  return <User />;
};
