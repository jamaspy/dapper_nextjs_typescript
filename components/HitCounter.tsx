import React from "react";
import { useQuery } from "react-query";
interface IProps {
  params: { slug: string };
}

const HitCounter = ({ params }: IProps) => {
  const registerHit = async () => {
    if (process.env.NODE_ENV !== "production") {
      return;
    }
    const res = await fetch(
      `https://nextdapperts.netlify.app/api/register-hit?slug=${params.slug}`
    );
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
