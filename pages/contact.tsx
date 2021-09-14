import React from "react";
import { Header, Navbar } from "../components";
import type { NextPage } from "next";
const contacts: NextPage = () => {
  return (
    <>
      <Header title="Contact" description="Get in touch with me" />
      <Navbar />
      <p>Contact</p>
    </>
  );
};

export default contacts;
