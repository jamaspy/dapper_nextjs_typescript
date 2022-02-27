import React from "react";
import { Header, Navbar } from "@/components/index";
import type { NextPage } from "next";
import { ContactForm } from "../components";
const Contacts: NextPage = () => {
  return (
    <div className="bg-blacked min-h-screen">
      <Header title="Contact" description="Get in touch with me" />
      <Navbar />
      <main className="w-1/2 m-auto mt-48">
        <p className="text-xl font-semibold text-white">Send me a message</p>
        <ContactForm />
      </main>
    </div>
  );
};

export default Contacts;
