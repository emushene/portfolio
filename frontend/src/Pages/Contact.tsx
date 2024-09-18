import React from "react";

type Props = {};

const Contact = (props: Props) => {
  return (
    <div>
      <div className="h-[calc(100vh-30vh)] sm:ml-4 md:ml-16 xl:ml-64 2xl:ml-64 flex flex-col items-center gap-12 md:gap-24 md:flex-row mt-8 sm:mr-4 md:mr-10 xl:mr-20 p-8 sm:flex-grow">
        <div className="flex p-4 flex-col flex-wrap shadow flex-1 gap-8 sm:gap-2 w-full sm:w-auto">
          <h1 className="text-5xl font-bold text-center lg:text-6xl lg:max-w-md lg:text-left">
            Let's work together
          </h1>
          <div className="p-4">
            <h2 className="text-xl">Mail</h2>
            <span className="text-gray-500 cursor-pointer">e.mushene@gmail.com</span>
          </div>
          <div className="p-4">
            <h2 className="">Address</h2>
            <span className="text-gray-500">
              12 Minerva St, Kensington. Johannesburg 2094
            </span>
          </div>
          <div className="p-4">
            <h2>Telephone</h2>
            <span className="text-gray-500">+27 72 620 3386</span>
          </div>
        </div>
        <div className="flex flex-1 w-full sm:w-auto flex-grow">
          <form
            action=""
            className="min-w-[80%] flex flex-col items-center justify-between shadow gap-8 sm:gap-6 sm:mb-10 w-full sm:w-auto p-24 sm:p-8"
          >
            <input
              type="text"
              required
              placeholder="Your Name"
              className="sm:min-w-[90%] w-full p-2 border-gray-300 border rounded focus:border-blue-300 focus:outline-none"
            />
            <input
              type="email"
              required
              placeholder="Your Email Address"
              className="w-full border-gray-300 p-2 border rounded focus:border-blue-300 focus:outline-none"
            />
            <input
              type="number"
              placeholder="Your Telephone Number"
              className="w-full border-gray-300 p-2 border rounded focus:border-blue-300 focus:outline-none"
            />
            <textarea
              rows={8}
              placeholder="Write Message"
              className="w-full p-2 border-gray-300 border rounded text-teal-900 focus:border-blue-300 focus:outline-none"
            />
            <button className="px-4 py-2 bg-gray-600 text-white rounded border-gray-300">
              Send Message
            </button>
          </form>
        </div>
      </div>
      <div className="sm:mt-12 md:mt-8 xl:mt-4 sm:ml-4 md:ml-16 xl:ml-64 2xl:ml-64 flex flex-col items-center gap-12 md:gap-24 md:flex-row sm:mr-4 md:mr-10 xl:mr-20 p-8 sm:flex-grow">
        Add icons here
      </div>
    </div>
  );
};

export default Contact;
