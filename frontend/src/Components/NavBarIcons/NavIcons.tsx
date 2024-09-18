"use client";
import React, { useState } from "react";
import profile from "./profile.png";
import notification from "./notification.png";
import { Link, useNavigate } from "react-router-dom";

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
      <img
        src={profile}
        alt="Richard-Mucene-Resume-Profile"
        className="w-6 h-6 cursor-pointer"
        onClick={handleProfile}
      />
      {isProfileOpen && (
        <div className="absolute p-4 rounded-md top-12 left-0 text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20 ">
          <Link to={"/myprofile"}>Profile</Link>
          <div className="mt-2 cursor-pointer">Logout</div>
        </div>
      )}

      <img
        src={notification}
        alt="Richard-Mucene-Resume-Profile"
        className="w-6 h-6 cursor-pointer"
      />
    </div>
  );
};

export default NavIcons;
