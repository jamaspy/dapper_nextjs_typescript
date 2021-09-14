import React from "react";
import styles from "../styles/IndexHero.module.css";
import { navItems } from "../constants";
import { Logo } from "../components";
import Link from "next/link";
interface IProps {
  title: string;
  withSubtitle: boolean;
}
const IndexHero = ({ title, withSubtitle }: IProps) => {
  return (
    <div className={styles.container}>
      <Link href="/" passHref>
        <div className="absolute top-0 left-0 p-2 cursor-pointer">
          <Logo width={30} height={30} />
        </div>
      </Link>
      <div className="absolute top-0 right-0 flex flex-row mr-3 mt-6">
        {navItems.map((item, index) => (
          <Link key={index} href={item.route} passHref>
            <p className="mx-2 md:mx-4 lg:mx-4 xl:mx-4 text-xl cursor-pointer hover:text-indigo-500">
              {item.label}
            </p>
          </Link>
        ))}
      </div>

      <main className="flex flex-col md:flex-row lg:flex-row xl:flex-row w-full h-full p-8 text-center">
        <div className="flex w-full h-full items-center justify-center flex-col">
          <p className="text-4xl md:text-6xl lg:text-6xl xl:text-6xl mb-1">
            {title}
          </p>
          {withSubtitle && (
            <p className="text-xl mt-2">React | NextJS | TailwindCSS</p>
          )}
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
      </main>
    </div>
  );
};

export default IndexHero;
