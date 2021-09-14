import React from "react";
import { Header, Navbar } from "../components";
import type { NextPage } from "next";
const skills: NextPage = () => {
  return (
    <>
      <Header
        title="Projects"
        description="Things I have worked on and the skills that I have"
      />
      <Navbar />
      <p>Projects && Skills</p>
    </>
  );
};

export default skills;
