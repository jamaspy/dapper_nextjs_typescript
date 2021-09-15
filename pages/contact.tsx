import React from "react";
import { Header, Navbar } from "@/components/index";
import type { NextPage } from "next";
const contacts: NextPage = () => {
  return (
    <>
      <Header title="Contact" description="Get in touch with me" />
      <Navbar />
      <ul className="prose list-disc">
        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
      </ul>
    </>
  );
};

export default contacts;
