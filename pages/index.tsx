import type { NextPage } from "next";
import { Layout, Navbar } from "@/components/index";
import { FaChevronCircleRight } from "react-icons/fa";
import React from "react";
import { getAllPostsWithFrontMatter } from "@/lib/posts";
import { BlogProps } from "@/interfaces/index";
import Link from "next/link";

import Avatar from "../components/Avatar";

const Home = ({ posts, title, description }: BlogProps) => {
  const recentPosts = posts?.slice(0, 3);
  console.log("🚀  TESTY:  : Home : recentPosts", recentPosts);

  return (
    <Layout title={title} description={description}>
      <div className="flex flex-col lg:flex-row overflow-hidden">
        <div className="flex-1 ">
          {/* TEXT */}
          <div className="flex flex-col h-full justify-center px-4 lg:pl-12 mt-12 lg:mt-0">
            <h1 className=" tracking-tight font-extrabold text-gray-900 text-6xl md:text-8xl">
              <span className="block xl:inline text-white">dapper</span>{" "}
              <span className="block text-salmon xl:inline ml-6 md:ml-12">
                designer
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl md:mt-5 md:text-xl lg:mx-0">
              Frontend developer who loves to create beautiful and functional
              interfaces.
            </p>
            <div className="flex flex-col md:flex-row md:mt-8">
              <Link href="/contact" passHref>
                <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gatsby hover:bg-gatsby_hover md:py-4 md:text-lg md:px-10 md:mr-2 mb-2 md:mb-0">
                  Work with me
                </button>
              </Link>
              <Link href="/contact" passHref>
                <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gatsby_light hover:bg-gatsby_light_hover md:py-4 md:text-lg md:px-10">
                  Resumè
                </button>
              </Link>
            </div>
          </div>
          {/* END TEXT */}
        </div>
        <div className="flex-1">
          <Avatar />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between bg-gray-50 p-4">
        <div className="lg:w-3/4 mr-4">
          <h1>Hi, my name is James 👋</h1>
          <p className="lg:text-xl leading-relaxed">
            Alongside my day job I work with boutiques and startups to get their
            message out to their customers, by build progressive web apps, that
            are lightning-fast, secure, responsive, and SEO optimised.
          </p>
          <p className="lg:text-xl leading-relaxed">
            Favourite libraries at the moment are Gatsby, NextJS, and
            TailwindCSS. PlanetScale, Prisma, Contentful and Netlify are also my
            go-to tools for more full stack applications.
          </p>
        </div>
        <div className="flex-1">
          <div className="mt-4 lg:mt-0 pb-4 lg:pb-2">
            <h2 className="text-gatsby">Recent Posts</h2>
            <hr className="mb-2" />
            {recentPosts?.map((post, index) => {
              const { frontMatter } = post;
              const { slug } = post;

              return (
                <div key={`post-${index}`}>
                  <Link href={`blog/${slug}`} passHref>
                    <p className="hover:text-gatsby_light hover:font-bold cursor-pointer flex flex-row items-center ">
                      {frontMatter?.title}
                    </p>
                  </Link>
                </div>
              );
            })}
          </div>
          <iframe
            style={{ borderRadius: "12px", marginBottom: "24px" }}
            src="https://open.spotify.com/embed/playlist/6sKewr2VmHtPhWtsLbeKpW?utm_source=generator"
            width="100%"
            height="80"
            frameBorder="0"
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
        </div>
      </div>
    </Layout>
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
