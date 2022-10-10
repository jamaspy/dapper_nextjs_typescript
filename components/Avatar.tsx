import { BigHead } from "@bigheads/core";
import React from "react";
interface AvatarProps {
  theme: boolean;
}
const Avatar = ({ theme }: AvatarProps) => {
  return (
    <BigHead
      accessory={theme ? "roundGlasses" : "shades"}
      body="chest"
      circleColor="blue"
      clothing={theme ? "dressShirt" : "shirt"}
      clothingColor="red"
      eyebrows="raised"
      eyes="leftTwitch"
      faceMask={false}
      faceMaskColor="white"
      facialHair="none3"
      graphic="none"
      hair="buzz"
      hairColor="black"
      hat="none3"
      hatColor="green"
      lashes={false}
      lipColor="pink"
      mask={false}
      mouth="openSmile"
      skinTone="light"
    />
  );
};

export default Avatar;
