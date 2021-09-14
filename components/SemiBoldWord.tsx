import React from "react";
interface IProps {
  word: string;
}
const SemiBoldWord = ({ word }: IProps) => {
  return <span className="font-semibold">{word}</span>;
};

export default SemiBoldWord;
