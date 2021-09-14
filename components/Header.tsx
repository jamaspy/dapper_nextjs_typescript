import React from "react";
import Head from "next/head";
interface IProps {
  title: string;
  description: string;
}
const Header = ({ title, description }: IProps) => {
  return (
    <Head>
      <title>{title || `dapper designer`}</title>
      <meta
        name="description"
        content={description || "James Aspinall Personal Website"}
      />
      <link rel="icon" href="/Speda.svg" />
    </Head>
  );
};

export default Header;
