import React, { FC } from "react";
import Link from "next/link";
import Logo from "../components/Logo";
import styles from "../styles/Navbar.module.css";
import { navItems } from "../constants";
const Navbar: FC = () => {
  return (
    <div className={styles.container}>
      <Link href="/" passHref>
        <div className="absolute top-0 left-0 p-2">
          <Logo width={30} height={30} />
        </div>
      </Link>

      <div className="absolute top-0 right-0 flex flex-row mr-3 mt-6">
        {navItems.map((item, index) => (
          <Link key={index} href={item.route} passHref>
            <p className="mx-2 md:mx-4 lg:mx-4 xl:mx-4 text-md md:text-xl lg:text-xl xl:text-2xl cursor-pointer hover:text-indigo-500">
              {item.label}
            </p>
          </Link>
        ))}
      </div>
      <div className={styles.bottom}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className={styles.bottom_fill}
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Navbar;
