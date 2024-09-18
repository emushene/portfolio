import React from "react";
import hero from "./hero.jpg";
import { Link } from "react-router-dom";

interface Props {}

const Hero = (props: Props) => {
  return (
    <section id="hero">
      <div className="container flex flex-col-reverse mx-auto  lg:flex-row items-center justify-center sm:ml-28">
        <div className="flex flex-col space-y-10 mb-44 lg:w-1/2 ml-16">
          <h2 className="text-5xl font-bold text-center lg:text-6xl lg:max-w-md lg:text-left">
            Richard Mucene DevOps Engineer!
          </h2>
          <p className="text-2xl text-center text-gray-400 lg:max-w-md lg:text-left">
            Automate CI/CD pipelines, manage scalable cloud infrastructure, and
            ensure system reliability and security with efficiency and clarity.
          </p>
          <div className="mx-auto lg:mx-0">
            <Link
              to="/search"
              className="py-5 px-10 text-2xl font-bold text-white bg-gray-700 rounded lg:py-4 hover:opacity-70"
            >
              More about me
            </Link>
          </div>
        </div>
        <div className="mb-24 mx-auto md:w-180 md:px-10 lg:mb-0 lg:w-1/2 shadow-lg p-6">
          <img src={hero} alt="" className="rounded-xl" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
