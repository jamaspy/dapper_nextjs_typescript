import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";

export interface LayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
  theme: boolean;
}

const Layout = ({ children, title, description, theme }: LayoutProps) => {
  return (
    <div
      className={`container flex flex-col justify-between mx-auto min-h-screen ${
        theme ? "bg-nice_black" : "bg-white"
      } `}
    >
      <Header title={title} description={description} />
      <Navbar />

      {children}
      <Footer />
    </div>
  );
};

export default Layout;
