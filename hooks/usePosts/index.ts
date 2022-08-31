import { useQuery } from "react-query";

const fetchPosts = async (limit = 10) => {
  const data = await fetch("https://dapperdesigner.com/api/blogs");
  const parsed = await data.json();
  const result = await parsed.filter((x: any) => x.id <= limit);
  return result;
};

const usePosts = (limit: number) => {
  return useQuery(["posts", limit], () => fetchPosts(limit));
};

export { usePosts, fetchPosts };
