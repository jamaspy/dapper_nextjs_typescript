import React from "react";
import { Header, Navbar } from "@/components/index";
import type { NextPage } from "next";
import { ContactForm } from "../components";
const Contacts: NextPage = () => {
  return (
    <>
      <Header title="Contact" description="Get in touch with me" />
      <Navbar />
      <div className="w-1/2 m-auto mt-48">
        <p className="text-xl font-semibold">Send me a message</p>
        <ContactForm />
      </div>
    </>
  );
};

export default Contacts;
