import React from "react";
import { CodeBlock, Date, Header, HalfHero } from "@/components/index";
import { getFiles, getPostBySlug } from "@/lib/posts";
import ReactMarkdown from "react-markdown";
import { BlogPostProps } from "@/interfaces/index";
import Link from "next/link";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/cjs/styles/prism";

const SinglePost = ({ frontMatter, markdownBody }: BlogPostProps) => {
  return (
    <div>
      <Header title={frontMatter.title} description={frontMatter.description} />
      <HalfHero title={frontMatter.title} withSubtitle={false} />
      <div className="container m-auto">
        <ReactMarkdown
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <div className="my-8">
                  <SyntaxHighlighter
                    showLineNumbers
                    language="js"
                    style={nord}
                    PreTag="div"
                  >
                    {children}
                  </SyntaxHighlighter>
                </div>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
        >
          {markdownBody}
        </ReactMarkdown>
        <div className="w-full text-right mt-12">
          <p>
            <span className="font-semibold text-indigo-600">posted:</span>{" "}
            <Date dateString={frontMatter.date} />
          </p>
          <Link href="/blog" passHref>
            <p className="font-semibold hover:text-indigo-600 cursor-pointer transition-all">
              <span className="text-lg font-semibold">&#10510;</span>Back To
              Blogs
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const posts = await getFiles("blog");

  const paths = posts.map((filename: string) => ({
    params: {
      slug: filename.replace(/\.md/, ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }: any) {
  const { frontMatter, markdownBody } = await getPostBySlug(
    "blog",
    params.slug
  );

  return {
    props: {
      frontMatter,
      markdownBody,
    },
  };
}

export default SinglePost;
