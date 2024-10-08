import React from "react";

import { Link } from "react-router-dom";
import potrait from "../img/richard-mucene-potrait-devops.png";

interface Props {}

const Hero = (props: Props) => {
  return (
    <div className="mb-6 sm:mb-8 flex flex-col-reverse mx-auto lg:flex-row items-center justify-center lg:mx-64">
      <div className="p-4 flex flex-col items-center lg:w-1/3 flex-1 gap-6">
        <div>
          <h2 className="text-gray-700 text-2xl sm:text-3xl md:text-5xl font-bold text-center lg:text-6xl">
            Richard Mucene DevOps Engineer!
          </h2>
        </div>
        <div>
          <p className="select-none sm:text-sm md:text-2xl sm:text-wrap md:text-center text-gray-400 lg:max-w-md lg:text-left md:mb-10">
            Certified AWS and Azure Cloud Engineer with 17 years of IT Support
            experience. I specialize in automating CI/CD pipelines, managing
            scalable cloud infrastructure, and ensuring system reliability and
            security.
          </p>
        </div>

        <div className="mx-auto lg:mx-0 ">
          <Link
            to="/about-me"
            className="select-none py-5 px-10 md:text-2xl font-bold text-white bg-gray-700 rounded lg:py-4 hover:opacity-70"
          >
            More about me
          </Link>
        </div>
      </div>
      <div className="mx-auto md:w-180 md:px-10 lg:mb-0 lg:w-2/3 xl:ml-64 shadow-sm p-6 flex-1">
        <img
          src={potrait}
          alt=""
          className="filter grayscale hover:grayscale-0 transition duration-500 ease-in-out"
        />
      </div>
    </div>
  );
};

export default Hero;
