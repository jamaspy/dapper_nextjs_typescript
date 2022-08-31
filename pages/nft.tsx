import React from "react";
import Image from "next/image";
const nft = () => {
  return (
    <div
      className="h-screen w-screen flex items-center justify-center"
      style={{ backgroundColor: "#102844" }}
    >
      <Image
        src="/nft.png"
        alt="reading glasses"
        width={800}
        height={800}
        // layout="responsive"
        priority={true}
      />
    </div>
  );
};

export default nft;
