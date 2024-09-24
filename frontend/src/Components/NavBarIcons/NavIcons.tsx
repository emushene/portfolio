"use client";
import React, { useState } from "react";
import profile from "./profile.png";
import notification from "./notification.png";
import { Link, useNavigate } from "react-router-dom";
import facebook from "./facebook-richard-mucene.png";
import github from "./github-richard-mucene.png";
import instagram from "./instagram-richard-mucene.png";
import linkedin from "./linkedin-richard-mucene.png";
import twitter from "./twitter-X-richard-mucene.png";

interface Props {}

const NavIcons = (props: Props) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  //TEMP
  const isLoggedIn = false;
  const navigate = useNavigate();

  const handleProfile = () => {
    if (!isLoggedIn) {
      navigate("/");
    }
    setIsProfileOpen((prev) => !prev);
  };

  return (
    <div className="flex items-center gap-4 xl:gap-6 relative">
         <a href="https://x.com/swordinc" target="_blank" rel="noopener noreferrer">
        <img
          src={twitter}
          alt="richard-mucene-facebook"
          className="w-6 h-6 cursor-pointer hover:-translate-y-2"
        />
      </a>
      <a href="https://www.facebook.com/baba.gillian" target="_blank" rel="noopener noreferrer">
        <img
          src={facebook}
          alt="richard-mucene-facebook"
          className="w-6 h-6 cursor-pointer hover:-translate-y-2"
        />
      </a>
      <a href="https://www.linkedin.com/in/richard-mucene-307b0757/" target="_blank" rel="noopener noreferrer">
        <img
          src={linkedin}
          alt="richard-mucene-linkedin"
          className="w-6 h-6 cursor-pointer hover:-translate-y-2"
        />
      </a>
      <a href="https://www.instagram.com/swordinc/" target="_blank" rel="noopener noreferrer">
        <img
          src={instagram}
          alt="richard-mucene-instagram"
          className="w-6 h-6 cursor-pointer hover:-translate-y-2"
        />
      </a>
      <a href="https://github.com/emushene" target="_blank" rel="noopener noreferrer">
        <img
          src={github}
          alt="richard-mucene-github"
          className="w-6 h-6 cursor-pointer hover:-translate-y-2"
        />
      </a>

      <img
        src={profile}
        alt="Richard-Mucene-Resume-Profile"
        className="w-6 h-6 cursor-pointer hover:-translate-y-2"
        onClick={handleProfile}
      />
      {isProfileOpen && (
        <div className="">
          <div className=" flex gap-8 absolute p-4 rounded-md top-12 left-0 text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20 w-96 h-40 ">
            <div>
              <Link to={"/myprofile"}>Profile</Link>
              <div className="mt-2 cursor-pointer">Setting</div>
              <div className="mt-2 cursor-pointer">Others</div>
              <div className="mt-2 cursor-pointer">Add More</div>
              <div className="mt-2 cursor-pointer">Logout</div>
            </div>
            <h2>more stuff here</h2>
          </div>
        </div>
      )}

      <img
        src={notification}
        alt="Richard-Mucene-Resume-Profile"
        className="w-6 h-6 cursor-pointer hover:-translate-y-2"
      />
    </div>
  );
};

export default NavIcons;
