import "./App.css";
import { useQuery, useMutation } from "@tanstack/react-query";

const POSTS = [
  { id: 1, title: "Post 1" },
  { id: 2, title: "Post 2" },
];
function Query() {
  const postsQuery = useQuery({
    queryKey: ["posts"],
    queryFn: () => wait(1000).then(() => [...POSTS]),
  });

  if (postsQuery.isLoading) return <h1>Loading</h1>;
  if (postsQuery.isError) {
    return <div>{JSON.stringify(postsQuery.error)}</div>;
  }
  return (
    <div>
      {postsQuery.data.map((post) => (
        <div key={post.id}>{post}</div>
      ))}
    </div>
  );
}

function wait(duration) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}

export default Query;
