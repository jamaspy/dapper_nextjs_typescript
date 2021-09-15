import React from "react";
import { Date, Header, Navbar } from "@/components/index";
import type { NextPage } from "next";
import Link from "next/link";
import { getSortedPostsData } from "@/lib/posts";
const Blogs: NextPage = ({ allLocalPostsData }: any) => {
  return (
    <>
      <Header title="Blogs" description="Ideal Rambles About Code" />
      <Navbar />

      <div className="flex flex-wrap flex-col md:flex-row lg-flex:row xl:flex-row mt-4">
        {allLocalPostsData?.map(
          (blog: Record<string, string>, index: number) => (
            <Link key={index} href={`/blogs/${blog.id}`} passHref>
              <div className="cursor-pointer flex-1 border rounded-lg shadow m-2 p-2 flex flex-col hover:bg-pink-100 hover:shadow-lg transition-all text-gray-800">
                <p className="font-semibold text-lg mb-0">{blog.title}</p>

                <div className="h-full flex flex-col justify-between">
                  <p>{blog.exerpt}</p>

                  <p className="mt-2 text-right">
                    <span className="font-semibold text-indigo-500">
                      posted:{" "}
                    </span>
                    <Date dateString={blog.date} />
                  </p>
                </div>
              </div>
            </Link>
          )
        )}
      </div>
    </>
  );
};
export async function getStaticProps() {
  const allLocalPostsData = getSortedPostsData();

  return {
    props: {
      allLocalPostsData: allLocalPostsData,
    },
  };
}
export default Blogs;
