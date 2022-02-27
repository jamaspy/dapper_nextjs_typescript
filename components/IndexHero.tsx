import React from "react";
import styles from "../styles/IndexHero.module.css";
import { navItems } from "../constants";
import { Logo } from "../components";
import Link from "next/link";
import Navbar from "./Navbar";
interface IProps {
  title: string;
  withSubtitle: boolean;
}
const IndexHero = ({ title, withSubtitle }: IProps) => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <main className="flex flex-col md:flex-row lg:flex-row xl:flex-row w-full h-full p-8 text-center">
          <div className="flex w-full h-full items-center justify-center flex-col">
            <p className="text-4xl md:text-6xl lg:text-6xl xl:text-6xl mb-1">
              {title}
            </p>
            {withSubtitle && (
              <p className="text-xl mt-2">React | NextJS | TailwindCSS</p>
            )}
          </div>
        </main>
      </div>
    </>
  );
};

export default IndexHero;
