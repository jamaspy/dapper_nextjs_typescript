import type { NextPage } from "next";
import {
  GithubPill,
  Header,
  IndexHero,
  SemiBoldWord,
} from "@/components/index";
import React from "react";
import { getAllPostsWithFrontMatter } from "@/lib/posts";
import { QueryClient } from "react-query";
import { dehydrate } from "react-query/hydration";
import { fetchPosts, usePosts } from "../hooks";
import { BlogProps } from "@/interfaces/index";
import Link from "next/link";

const Home = ({ posts, title, description }: BlogProps) => {
  const { data } = usePosts(2);
  const recentPosts = posts?.slice(0, 3);

  return (
    <>
      <Header title={title} description={description} />
      <IndexHero title="dapper designer" withSubtitle={true} />

      <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row h-full w-full py-8">
        <div className="flex flex-col w-full h-full p-4 text-gray-800">
          <p className="text-xl font-semibold mb-4">Hi, my name is James.</p>
          <p className="mb-2">
            I am a Frontend Developer based in Sydney working for a AgTech
            company.
          </p>
          <p className="mb-3">
            Prior to this, I was a tech recruiter for 11 years and even ran my
            own company with my partner. However, at 32 years old I decided I
            had enough and need to pursue my passion for developement. I went
            back to school full time{" "}
            <span className="italic">(terrifying)</span> to retrain in full
            stack development.
          </p>
          <p className="mb-3">
            I landed a job straight out of school,{" "}
            <span className="italic">[now]</span> working 100% remotely on a
            clouded based asset management platform. Also, I have found my love;{" "}
            <SemiBoldWord word="Front of the Frontend Development & Design Systems" />
            . I am working with React, Typescript, TailwindCSS, Figma &
            Storybook daily, and I am leading the design and implementation of
            the first design system in my current role{" "}
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
            ranging from a simple static landing page in Gatsby to video
            streaming platforms using Contentful, MUX and VideoJS.{" "}
          </p>
          <p className="text-xl font-semibold mb-4">Current Side Project</p>
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
        </div>
        <div className="flex w-full h-full p-4 text-gray-800">
          <div className="w-full">
            <p className="text-xl font-semibold mb-4 ">Recent Posts</p>
            <hr />
            {recentPosts?.map(({ slug, frontMatter }: any) => {
              const { title, description } = frontMatter;
              console.log(frontMatter);
              return (
                <div className="border-b mb-4 pb-2 mt-4" key={slug}>
                  <p className="text-lg mb-1">{title}</p>
                  <p className="text-base mb-1">{description}</p>

                  <Link href={`/blog/${slug}`} passHref>
                    <p className="cursor-pointer hover:text-indigo-500 hover:font-semibold transition-all">
                      Read More{" "}
                      <span className="text-indigo-500">&#10140;</span>
                    </p>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  const posts = await getAllPostsWithFrontMatter("blog");

  return {
    props: {
      posts,
      title: "Home",
      description:
        "Welcome to Dapper Designer, James Aspinall's personal website & mini blog",
    },
  };
}

export default Home;
