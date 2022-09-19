import React from "react";
import { Layout } from "@/components/index";
import type { NextPage } from "next";
import { PROJECTS } from "../constants";
import { HiOutlineGlobe } from "react-icons/hi";
import Image from "next/image";
const skills: NextPage = () => {
  return (
    <Layout title="Projects" description="Things I have worked on">
      <div className="w-full md:w-3/4 lg:w-1/2 pl-2 md:pl-4 lg:pl-12 lg:my-24">
        <h1 className=" tracking-tight font-extrabold text-gray-900 text-6xl md:text-8xl">
          <span className="block xl:inline text-white">internet</span>{" "}
          <span className="block text-salmon xl:inline ml-6 md:ml-12">
            things
          </span>
        </h1>
        <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl md:mt-5 md:text-xl lg:mx-0">
          A few of the latest internet things that I have worked on in my spare
          time.
        </p>
      </div>
      <div className="p-4 text-white grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="group relative rounded-lg overflow-hidden">
          <Image
            src="/leos.png"
            layout="responsive"
            width={200}
            height={200}
            objectFit="cover"
            alt="leos"
          />
          <div className="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-gatsby opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
            <h1 className="text-2xl text-white">Leonardos Deli</h1>
            <p className="text-sm text-center lg:text-left">
              Gatsby, Tailwind, Contentful, Netlify
            </p>
            <a
              className="mt-5 px-8 py-3 rounded-full bg-amber-400 hover:bg-amber-600 duration-300"
              href="#"
            >
              Visit Project
            </a>
          </div>
        </div>
        <div className="group relative rounded-lg overflow-hidden">
          <Image
            src="/pre.png"
            layout="responsive"
            width={200}
            height={200}
            objectFit="cover"
            alt="leos"
          />
          <div className="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-gatsby opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
            <h1 className="text-2xl text-white">Preacta</h1>
            <p className="text-sm text-center lg:text-left">
              Gatsby, SaSS, Contentful, Netlify
            </p>
            <a
              className="mt-5 px-8 py-3 rounded-full bg-amber-400 hover:bg-amber-600 duration-300"
              href="#"
            >
              Visit Project
            </a>
          </div>
        </div>
        <div className="group relative rounded-lg overflow-hidden">
          <Image
            src="/kloud.png"
            layout="responsive"
            width={200}
            height={200}
            objectFit="cover"
            alt="leos"
          />
          <div className="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-gatsby opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
            <h1 className="text-2xl text-white">Kloud Partners</h1>
            <p className="text-sm text-center lg:text-left">
              Gatsby, Tailwind, GreenSock, Netlify
            </p>
            <a
              className="mt-5 px-8 py-3 rounded-full bg-amber-400 hover:bg-amber-600 duration-300"
              href="#"
            >
              Visit Project
            </a>
          </div>
        </div>

        <div className="group relative rounded-lg overflow-hidden">
          <Image
            src="/revelwell.png"
            layout="responsive"
            width={200}
            height={200}
            objectFit="cover"
            alt="leos"
          />
          <div className="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-gatsby opacity-0 group-hover:h-full group-hover:opacity-100 duration-500 px-2">
            <h1 className="text-xl text-white">RevelWell</h1>
            <p className="text-sm text-center lg:text-left">
              Gatsby, Netlify, Stripe, MUX, Contentful
            </p>
            <a
              className="mt-5 px-8 py-3 rounded-full bg-amber-400 hover:bg-amber-600 duration-300"
              href="#"
            >
              Visit Project
            </a>
          </div>
        </div>
      </div>
      {/* <main className="grid grid-col-1 md:grid-col-2 lg:grid-cols-3 gap-4 p-4">
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
      </main> */}
    </Layout>
  );
};

export default skills;
