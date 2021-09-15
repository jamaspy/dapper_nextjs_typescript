import React from "react";
import { Date, Header, HalfHero } from "@/components/index";
import { getAllPostIds, getPostData } from "@/lib/posts";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
const SinglePost = ({ postData }: any) => {
  return (
    <div>
      <Header title={postData.title} description={postData.title} />
      <HalfHero title={postData.title} withSubtitle={false} />
      <div
        className="container m-auto p-12 text-gray-800"
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
      />

      <div className="container p-12 text-right">
        <p>
          <span className="font-semibold text-indigo-600">posted:</span>{" "}
          <Date dateString={postData.date} />
        </p>
        <Link href="/blogs" passHref>
          <p className="font-semibold hover:text-indigo-600 cursor-pointer transition-all">
            <span className="text-lg font-semibold">&#10510;</span>Back To Blogs
          </p>
        </Link>
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }: any) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export default SinglePost;
