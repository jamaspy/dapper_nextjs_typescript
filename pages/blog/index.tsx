import React from "react";
import { Date, Header, Navbar } from "@/components/index";
import type { NextPage } from "next";
import Link from "next/link";
import { getAllPostsWithFrontMatter } from "@/lib/posts";
const Blogs: NextPage = ({ posts }: any) => {
  return (
    <>
      <Header title="Blogs" description="Ideal Rambles About Code" />
      <Navbar />

      <div className="flex flex-wrap flex-col md:flex-row lg-flex:row xl:flex-row mt-4">
        {posts?.map(({ slug, frontMatter }: any) => (
          <Link key={slug} href={`/blog/${slug}`} passHref>
            <div className="cursor-pointer flex-1 border rounded-lg shadow m-2 p-2 flex flex-col hover:bg-pink-100 hover:shadow-lg transition-all text-gray-800">
              <p className="font-semibold text-lg mb-0">{frontMatter.title}</p>

              <div className="h-full flex flex-col justify-between">
                <p>{frontMatter.exerpt}</p>

                <p className="mt-2 text-right">
                  <span className="font-semibold text-indigo-500">
                    posted:{" "}
                  </span>
                  <Date dateString={frontMatter.date} />
                </p>
              </div>
            </div>
          </Link>
        ))}
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
      description: "James Aspinall | Frontend Developer",
    },
  };
}
export default Blogs;
