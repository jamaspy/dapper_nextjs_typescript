import React from "react";
interface IProps {
  tag: string;
}
const TagPill = ({ tag }: IProps) => {
  return (
    <div className="rounded-full bg-indigo-500 mx-2 text-white px-2 py-1 w-32 text-center shadow-md">
      #{tag}
    </div>
  );
};

export default TagPill;
