import type { NextPage } from "next";
import {
  GithubPill,
  Header,
  IndexHero,
  SemiBoldWord,
} from "@/components/index";
import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineMail,
} from "react-icons/ai";
import React from "react";
import { getAllPostsWithFrontMatter } from "@/lib/posts";
import { BlogProps } from "@/interfaces/index";
import Link from "next/link";

const Home = ({ posts, title, description }: BlogProps) => {
  const recentPosts = posts?.slice(0, 3);

  return (
    <div className="bg-blacked text-white">
      <Header title={title} description={description} />
      <IndexHero title="dapper designer" withSubtitle={true} />
      <main>
        <div className="container p-4">
          <p className="text-xl font-semibold mb-4">
            Hi, my name is James.{" "}
            <span role="img" aria-label="waving hand">
              👋
            </span>
          </p>

          <p>
            Alongside my day job I work with boutiques and startups to get their
            message out to their customers, by build progressive web apps, that
            are lightning-fast, secure, responsive, and SEO optimised. Favourite
            libraries at the moment are Gatsby, NextJS, and TailwindCSS.
            FaunaDB, Contentful and Netlify are also my go-to tools.
          </p>
        </div>
        <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row h-full w-full py-8">
          <div className="flex w-full h-full p-4 text-white">
            <div className="w-full">
              <p className="text-xl font-semibold mb-4 ">Recent Posts</p>
              <hr />
              {recentPosts?.map(({ slug, frontMatter }: any) => {
                const { title, description } = frontMatter;

                return (
                  <div className="border-b mb-4 pb-2 mt-4" key={slug}>
                    <p className="text-lg mb-1">{title}</p>
                    <p className="text-base mb-1">{description}</p>

                    <Link href={`/blog/${slug}`} passHref>
                      <p className="hover:animate-wiggle cursor-pointer hover:text-dark_pink hover:font-semibold transition-all">
                        Read More{" "}
                        <span className="text-dark_pink">&#10140;</span>
                      </p>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col bg-black text-white items-center justify-center p-4">
          <div className="flex flex-row items-center justify-cente mb-1 text-xl">
            <AiOutlineLinkedin className="mx-1" />
            <AiOutlineGithub className="mx-1" />
            <AiOutlineMail className="mx-1" />
          </div>
          <p>Portfolio playground made by James Aspinall 2021</p>
        </div>
      </main>
    </div>
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
