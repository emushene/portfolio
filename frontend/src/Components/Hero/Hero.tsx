import React from "react";
import hero from "./hero.jpg";
import { Link } from "react-router-dom";

interface Props {}

const Hero = (props: Props) => {
  return (

      <div className=" w-[90%] flex flex-col-reverse mx-auto lg:flex-row items-center justify-center sm:ml-28">
        <div className="flex flex-col items-center space-y-10 mb-44 lg:w-1/2 ml-16 flex-1">
          <h2 className="text-5xl font-bold text-center lg:text-6xl lg:max-w-md lg:text-left">
            Richard Mucene DevOps Engineer!
          </h2>
          <p className="text-2xl text-center text-gray-400 lg:max-w-md lg:text-left">
        Certified AWS and Azure Cloud Engineer with 17 years of IT Support experience.
          I specialize in automating CI/CD pipelines, managing scalable cloud infrastructure, and ensuring system reliability and security.
          </p>
          <div className="mx-auto lg:mx-0 ">
            <Link
              to="/search"
              className="py-5 px-10 text-2xl font-bold text-white bg-gray-700 rounded lg:py-4 hover:opacity-70"
            >
              More about me
            </Link>
          </div>
        </div>
        <div className="mb-24 mx-auto md:w-180 md:px-10 lg:mb-0 lg:w-1/2 xl:ml-64 shadow-sm p-6 flex-1">
          <img src={hero} alt="" className="rounded-xl xl:p-24" />
        </div>
      </div>
 
  );
};

export default Hero;
