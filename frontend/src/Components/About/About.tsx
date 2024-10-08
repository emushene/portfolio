import React from "react";
import profilepic from "./richard-mucene-potrait.jpg";
import teamplayer from "./richard-mucene-netsureit.jpg";
import award from "./richard-mucene-t-systems-awards.jpg";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 md:mx-32 text-gray-600 text-xs sm:text-sm lg:text-lg">
      {/* Profile Picture */}
      <div className="flex justify-center md:justify-center">
        <img
          src={profilepic}
          alt="richard-mucene-profile"
          className="rounded-full w-32 h-32 md:w-64 md:h-64 object-cover"
        />
      </div>

      {/* About Me Text with Integrated Photos and Captions */}
      <div className="col-span-2 space-y-4">
        <h2 className="font-bold mb-4 font-gray-700 text-xl">About Me</h2>
        <p className="">
          Family and community are at the core of who I am. As a devoted father
          of four, I’ve always believed that the values we instill at home
          resonate in every aspect of life. I’ve spent 25 years in South Africa,
          where I cultivated a strong sense of community and resilience. Now
          living in Kenya, I carry these principles forward, striving to create
          a balance between my personal life and professional aspirations.
        </p>
        <div className="relative mb-4">
          <p className="">
            I’m deeply passionate about athletics, which has been a lifelong
            pursuit that keeps me grounded and energized. Whether it’s running,
            participating in team sports, or staying active with my family,
            athletics has taught me the importance of discipline, perseverance,
            and pushing beyond my limits. These qualities aren’t just reserved
            for the track or field—they are the same principles I apply in my
            work as a DevOps Engineer.
          </p>
          <div className="flex flex-col items-center md:float-right md:w-1/2 mt-4 ml-4 mb-4">
            <img
              src={teamplayer}
              alt="Team Player"
              className="rounded-lg object-cover w-full md:h-auto"
            />
            <p className="text-center text-xs text-gray-500 mt-2">
              Participating at a team-building event with colleagues from{" "}
              <a
                href="https://netsurit.com/en-us/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 underline"
              >
                Netsurit
              </a>
              .
            </p>
          </div>
        </div>
        <p className="tracking-wide  ">
          Collaboration and teamwork are central to my approach to both life and
          work. As a DevOps Engineer at KPFC Builders, I lead initiatives to
          develop and implement ERP solutions for a multi-retail setup, ensuring
          seamless integration with systems like KRA iTax while enhancing e-commerce and mobile money capabilities. 
          Previously, I worked as an Infrastructure Solutions Architect (Disaster Recovery) for TrueERP, where I managed server migrations and implemented disaster recovery solutions. 
          Earlier in my career, I served as a Systems Administrator at Jospet Financial Services, supporting IT infrastructure and ensuring optimal system performance. My journey began as a Senior Wintel Generalist at T-Systems, where I supported major clients like Eskom and Transnet.
          This belief extends into my professional life, where I thrive in environments that foster innovation and collective problem-solving.
        </p>
        <div className="relative mb-4">
          <p className="">
            I am a strong advocate for mentoring and training others, as I find
            immense satisfaction in helping colleagues and aspiring IT
            professionals reach their full potential.
          </p>
          <div className="flex flex-col items-center md:float-left md:w-1/2 mt-4 mr-4">
            <img
              src={award}
              alt="Award"
              className="rounded-lg object-cover w-full md:h-auto"
            />
            <p className="text-center text-xs text-gray-500 mt-2 mb-2">
              Receiving an award together with my Team for Best Project Management from{" "}
              <a href="https://www.t-systems.com/en" target="_blank" rel="noopener noreferrer" className="text-gray-600 underline">T-Systems</a> SA during our successful{" "}
              <a href="https://www.oldmutual.co.za/about/old-mutual-insure" target="_blank" rel="noopener noreferrer" className="text-gray-600 underline">Old Mutual Insure</a> Data Center Move.
            </p>
          </div>
        </div>
        <p className="">
          Technology has always been a passion of mine. My career in IT has
          allowed me to channel this passion into creating solutions that drive
          efficiency and innovation. Over the years, I’ve specialized in DevOps,
          focusing on designing, implementing, and managing cloud
          infrastructures that are both scalable and secure. My expertise
          includes building seamless CI/CD pipelines, automating processes, and
          ensuring high system availability—always with an eye toward optimizing
          performance.
        </p>
        <p className="">
          Living in Kenya now, I am eager to bring my global perspective and
          experience to new challenges and opportunities. Whether it’s
          collaborating with teams, mentoring others, or pushing the boundaries
          of what technology can achieve, I am driven by a passion for IT and
          the belief that together, we can create impactful solutions.
        </p>
      </div>
    </div>
  );
};

export default About;
