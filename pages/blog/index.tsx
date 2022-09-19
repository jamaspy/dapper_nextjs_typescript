import React from "react";
import { Date, Layout } from "@/components/index";
import type { NextPage } from "next";
import Link from "next/link";
import { getAllPostsWithFrontMatter } from "@/lib/posts";

const Blogs: NextPage = ({ posts }: any) => {
  return (
    <Layout title="Blogs" description="things I have written">
      <div className="w-full md:w-3/4 lg:w-1/2 pl-2 md:pl-4 lg:pl-12">
        <h1 className=" tracking-tight font-extrabold text-gray-900 text-6xl md:text-8xl">
          <span className="block xl:inline text-white">mindless</span>{" "}
          <span className="block text-salmon xl:inline ml-6 md:ml-12">
            ramblings
          </span>
        </h1>
        <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl md:mt-5 md:text-xl lg:mx-0">
          Here are some articles that I have wrriten about frontend development
          &amp; features that I have worked on.
        </p>
      </div>
      <div className="flex flex-wrap flex-col md:flex-row lg-flex:row xl:flex-row mt-4">
        {posts?.map(({ slug, frontMatter }: any) => (
          <Link key={slug} href={`/blog/${slug}`} passHref>
            <div className="text-white cursor-pointer flex-1 border rounded-lg shadow m-2 p-2 flex flex-col hover:bg-pink-100 hover:bg-opacity-20 hover:shadow-lg transition-all ">
              <p className="font-semibold text-lg mb-0">{frontMatter.title}</p>

              <div className="h-full flex flex-col justify-between text-white">
                <p>{frontMatter.exerpt}</p>

                <p className="mt-2 text-right">
                  <span className="font-semibold text-dark_pink">posted: </span>
                  <Date dateString={frontMatter.date} />
                </p>
              </div>
            </div>
          </Link>
        ))}
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
      description: "James Aspinall | Frontend Developer",
    },
  };
}
export default Blogs;
