import React from "react";
import Image from "next/image";

interface IProps {
  width: number;
  height: number;
}
const Logo = ({ width, height }: IProps) => {
  return (
    <div className="mb-2 w-12 h-12 border-4 border-white rounded-full top-0 left-0 flex items-center justify-center ml-3 mt-3">
      <Image
        src="/Speda.svg"
        alt="reading glasses"
        width={width}
        height={height}
        priority={true}
      />
    </div>
  );
};

export default Logo;
