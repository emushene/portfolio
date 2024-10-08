import React from "react";

import { Link } from "react-router-dom";
import potrait from "../img/richard-mucene-potrait-devops.png";

interface Props {}

const Hero = (props: Props) => {
  return (
    <div className="mb-6 sm:mb-8 flex flex-col-reverse mx-auto lg:flex-row items-center justify-center lg:mx-64">
      <div className="p-4 flex flex-col items-center lg:w-1/3 flex-1 gap-6">
        <div>
          <h2 className="text-gray-700 text-3xl font-bold  lg:text-5xl xl:text-6xl xl:ml-24">
            Richard Mucene DevOps Engineer!
          </h2>
        </div>
        <div>
          <p className="sm:text-sm md:text-lg sm:text-wrap md:text-center xl:text-2xl text-gray-400 lg:max-w-md lg:text-left md:mb-10">
            Certified AWS and Azure Cloud Engineer with 17 years of IT Support
            experience. I specialize in automating CI/CD pipelines, managing
            scalable cloud infrastructure, and ensuring system reliability and
            security.
          </p>
        </div>

        <div className="mx-auto lg:mx-0 ">
          <Link
            to="/about-me"
            className="p-2 sm:p-3 md:text-xl font-bold text-white bg-gray-700 rounded hover:opacity-70 "
          >
            More about me
          </Link>
        </div>
      </div>
      <div className="mx-auto lg:w-2/3 p-6 flex-1">
        <img
          src={potrait}
          alt="Richard-Mucene-potrait"
          className="filter grayscale hover:grayscale-0 transition duration-500 ease-in-out"
        />
      </div>
    </div>
  );
};

export default Hero;
