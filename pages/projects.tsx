import React from "react";
import { GithubPill, Header, Navbar, SemiBoldWord } from "@/components/index";
import type { NextPage } from "next";
import { PROJECTS } from "../constants";
import { HiOutlineGlobe } from "react-icons/hi";
import styles from "../styles/Projects.module.css";
const skills: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header
        title="Projects"
        description="Things I have worked on and the skills that I have"
      />
      <Navbar />

      <main className="grid grid-col-1 md:grid-col-2 lg:grid-cols-3 gap-4 p-4">
        {PROJECTS.map((project) => (
          <div
            key={project.id}
            className="hover:bg-gray-50 hover:bg-opacity-50 transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-105 rounded-md shadow-md border-2 border-dark_pink flex flex-col justify-between p-2"
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
                        className=" hover:text-dark_pink flex flex-row items-center justify-center font-semibold text-xl "
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <HiOutlineGlobe className="text-3xl mr-2" />{" "}
                        <span className="">Live</span>
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
      </main>
    </div>
  );
};

export default skills;
