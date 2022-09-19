import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";

export interface LayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
}

const Layout = ({ children, title, description }: LayoutProps) => {
  return (
    <div className="container flex flex-col justify-between mx-auto min-h-screen bg-nice_black">
      <Header title={title} description={description} />
      <Navbar />

      {children}
      <Footer />
    </div>
  );
};

export default Layout;
