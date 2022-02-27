import React, { FC } from "react";
import Link from "next/link";
import Logo from "../components/Logo";
import styles from "../styles/Navbar.module.css";
import { navItems } from "../constants";
const Navbar: FC = () => {
  const [show, setShow] = React.useState(false);
  return (
    <>
      <nav className="flex justify-between mx-auto px-4 bg-blacked text-white">
        <Link href="/" passHref>
          <div className="cursor-pointer">
            <Logo width={30} height={30} />
          </div>
        </Link>
        <div className="hidden space-x-8 lg:flex items-center justify-center">
          {navItems.map((item, index) => (
            <Link key={index} href={item.route} passHref>
              <p className="mx-2 md:mx-4 lg:mx-4 xl:mx-4 text-xl cursor-pointer hover:text-dark_pink transition-all">
                {item.label}
              </p>
            </Link>
          ))}
        </div>
        <div
          className={`${
            !show ? "flex" : "hidden"
          } items-center justify-center lg:hidden px-4`}
          onClick={() => {
            setShow(!show);
            console.log(show);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
        <div
          className={`${
            show ? "flex" : "hidden"
          }  items-center justify-center lg:hidden px-4`}
          onClick={() => {
            setShow(!show);
            console.log(show);
          }}
        >
          <svg
            viewBox="0 0 40 40"
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              className="close-x"
              d="M 10,10 L 30,30 M 30,10 L 10,30"
            />
          </svg>
        </div>
      </nav>

      <div
        className={`${
          show ? "flex" : "hidden"
        } absolute top-20 space-y-4 flex-col w-full items-center justify-center text-white z-50 bg-blacked`}
      >
        {navItems.map((item, index) => (
          <Link key={index} href={item.route} passHref>
            <p className="mx-2 md:mx-4 lg:mx-4 xl:mx-4 text-xl cursor-pointer hover:text-dark_pink transition-all">
              {item.label}
            </p>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Navbar;
