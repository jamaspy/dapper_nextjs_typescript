import React from "react";
import type { NextPage } from "next";
import { GithubPill, Header, Navbar, SemiBoldWord } from "@/components/index";
const about: NextPage = () => {
  return (
    <div>
      <Header
        title="About Me"
        description="A little bit of background on James Aspinall"
      />
      <Navbar />
      <main className="flex flex-col w-full h-full p-4 text-gray-800">
        <p className="text-xl font-semibold mb-4">
          Hi, my name is James.{" "}
          <span role="img" aria-label="waving hand">
            👋
          </span>
        </p>
        <p className="mb-2 ">
          I am a Frontend Developer based in Sydney working for a AgTech
          company.
        </p>
        <p className="mb-3">
          Prior to this, I was a tech recruiter for 11 years and even ran my own
          company with my partner. However, at 32 years old I decided I had
          enough and need to pursue my passion for developement. I went back to
          school full time <span className="italic">(terrifying)</span> to
          retrain in full stack development.
        </p>
        <p className="mb-3">
          I landed a job straight out of school,{" "}
          <span className="italic">[now]</span> working 100% remotely on a
          clouded based asset management platform. Also, I have found my love;{" "}
          <SemiBoldWord word="Front of the Frontend Development & Design Systems" />
          . I am working with React, Typescript, TailwindCSS, Figma & Storybook
          daily, and I am leading the design and implementation of the first
          design system in my current role{" "}
          <a
            target="_blank"
            href="http://design.waypath.io/"
            className="hover:text-indigo-500 font-semibold transition-all"
            rel="noreferrer"
          >
            (Work In Progress)
          </a>
          .
        </p>
        <p className="mb-8">
          On the side I work with local businesses and startups on projects
          ranging from a simple static landing page in Gatsby to video streaming
          platforms using Contentful, MUX and VideoJS.{" "}
        </p>
        <p className="text-xl font-semibold mb-4">
          Current Side Project{" "}
          <span role="img" aria-label="waving hand">
            🚀
          </span>{" "}
        </p>
        <hr />
        <p className="mt-4">
          SaaS platform using <SemiBoldWord word="ReactJS" />,{" "}
          <SemiBoldWord
            word="Beautiful Drag
            n Drop"
          />
          , <SemiBoldWord word="React-Query" /> &{" "}
          <SemiBoldWord word="TailwindCSS" />, hosted on{" "}
          <SemiBoldWord word="AWS" /> and deployed using{" "}
          <SemiBoldWord word="Github Actions" />
        </p>
        <GithubPill />
      </main>
    </div>
  );
};

export default about;
