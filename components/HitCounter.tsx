import React from "react";
import { useQuery } from "react-query";
import { BASE_API_URL } from "../constants";
interface IProps {
  params: { slug: string };
}

const HitCounter = ({ params }: IProps) => {
  const registerHit = async () => {
    if (process.env.NODE_ENV !== "production") {
      return;
    }
    const url = `${BASE_API_URL}/register-hit?slug=${params.slug}`;
    const res = await fetch(url);
    const data = await res.json();
    return data;
  };

  const { data } = useQuery(["get_hits", `${params.slug}`], registerHit);

  if (typeof data === "undefined") {
    return null;
  }
  if (data && data?.hits !== 0) {
    return (
      <p>
        <span className="font-semibold text-indigo-600">Number Of Hits: </span>
        {data?.hits}
      </p>
    );
  }
  return null;
};

export default HitCounter;
