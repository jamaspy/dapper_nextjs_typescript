import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="w-full bg-nice_black text-gatsby flex items-center justify-center font-bold flex-col py-2">
      <div className="flex flex-row my-2">
        <FaLinkedin className="mr-2 cursor-pointer hover:text-gatsby_light" />
        <FaGithub className="mr-2 cursor-pointer hover:text-gatsby_light" />
        <FaTwitter className="cursor-pointer hover:text-gatsby_light" />
      </div>
      <p>dapper design © {new Date().getFullYear()}</p>
    </div>
  );
};

export default Footer;
