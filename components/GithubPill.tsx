import React from "react";
import Link from "next/link";
import { VscGithub } from "react-icons/vsc";
import { DiGithubFull } from "react-icons/di";
const GithubPill = () => {
  return (
    <Link href="https://github.com/jamaspy" passHref>
      <div className="flex flex-row h-full items-center  w-36 justify-around mt-6  hover:cursor-pointer border rounded-md overflow-hidden transition-all">
        <div className="h-full flex flex-1 p-2 flex-col justify-between items-center text-2xl bg-seagreen text-white ">
          <VscGithub /> <DiGithubFull />
        </div>
        <div className="ml-1">
          <p>View Source Code</p>
        </div>
      </div>
    </Link>
  );
};

export default GithubPill;
