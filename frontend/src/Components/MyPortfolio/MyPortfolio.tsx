import React, { useRef } from "react";
import { myData } from "./MyData";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

type Item = {
  id: number;
  img: string;
  description: any;
  title: string;
};

const MyPortfolio: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["end end", "start start"] });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  const Single = () => {
    const itemRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress: itemScrollYProgress } = useScroll({ target: itemRef });
    const y = useTransform(itemScrollYProgress, [0, 1], [-100, 100]);

    return (
      <>
        {myData.map((item: Item) => (
          <section key={item.id} className="selection-none xl:border-b border-gray-300 md:h-[80vh] ml-24 mr-24">
            <motion.div ref={itemRef} className="flex items-center flex-col md:flex-row justify-between gap-6 flex-grow flex-wrap" style={{ y }}>
              <div className="hidden md:block  rounded-xl shadow-2xl flex-1 items-center justify-center p-8 ">
                <img src={item.img} alt={item.title} className="object-cover md:h-96" />
                {/* <h1 className="text-center">Image Div</h1> */}
              </div>

              <div className="flex flex-col shadow-2xl p-4 gap-3 flex-1">
                <h1 className="text-sm sm:text-xl font-semibold p-3">{item.title}</h1>
                <p className="text-gray-700 text-wrap tracking-wider text-xs xl:text-lg p-4">{item.description}</p>
              </div>
            </motion.div>
          </section>
        ))}
      </>
    );
  };

  return (
    <div className="select-none flex flex-col justify-center items-center flex-grow relative" ref={containerRef}>
      <div className="sticky top-20 z-10 bg-white w-full">
        <div className="md:flex justify-center gap-12 sm:flex-row sm:items-center sm:justify-center ">
          <a
            href="/Richard_Mucene_Resume.pdf" // Correct path to the resume file
            download="Richard-Mucene-Resume.pdf" // Update the file name as needed
            className=" mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-gray-600 text-sm"
          >
            Download Resume
          </a>
          <h1 className="font-bold text-center text-gray-600 xl:text-5xl">
            Education & Featured Work Experience
          </h1>
        </div>
        <motion.div style={{ scaleX }} className="md:h-2 bg-gray-200 xl:w-[70vw] mt-4"></motion.div>
      </div>
      <Single />
    </div>
  );
};

export default MyPortfolio;
