import React from "react";
import { Header, Navbar } from "../components";
import type { NextPage } from "next";
import { PROJECTS } from "../constants";
import { HiOutlineGlobe } from "react-icons/hi";
const skills: NextPage = () => {
  return (
    <>
      <Header
        title="Projects"
        description="Things I have worked on and the skills that I have"
      />
      <Navbar />

      <div className="grid grid-col-1 md:grid-col-2 lg:grid-cols-3 gap-4 p-4">
        {PROJECTS.map((project) => (
          <div
            key={project.id}
            className="hover:bg-gray-50 transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-105 rounded-md shadow-md border-2 border-seagreen flex flex-col justify-between p-2"
          >
            <div className="flex flex-row">
              <div className="flex flex-row w-full justify-between h-full ">
                <div className="">
                  <p className="font-black text-xl">{project.name}</p>
                  <p className="font-light">{project.description}</p>
                </div>
              </div>
              <div className="flex flex-col items-start flex-1 p-2">
                <ul>
                  {project.link && !project.isPrivate && (
                    <>
                      <a
                        className="flex flex-row items-center justify-center font-semibold text-xl "
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <HiOutlineGlobe className="text-tangerine text-3xl mr-2" />{" "}
                        <span className="hover:text-tangerine">Live</span>
                      </a>
                    </>
                  )}
                  {project.tech.map((skill, index) => (
                    <li key={`text_${index}`}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default skills;
