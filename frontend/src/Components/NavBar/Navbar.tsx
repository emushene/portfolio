import React, { ChangeEvent, SyntheticEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "./logo2.png";
import Menu from "../Menu/Menu";
import SearchBar from "../SearchBar/SearchBar";
import NavIcons from "../NavBarIcons/NavIcons";

const Navbar: React.FC = () => {
  const [search, setSearch] = useState<string>("");

  const navigate = useNavigate(); // Hook for navigation

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearch(e.target.value);
  };

  const onSearchSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    navigate(`/search?query=${encodeURIComponent(search)}`); // Navigate to SearchPage with search query
  };

  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      <div className="flex items-center justify-between md:hidden">
        {/* MOBILE */}
        <Link to={"/"}>
          <div className="text-2xl tracking-wide">Richard</div>
        </Link>
        <Menu />
      </div>
      {/* Bigger Screens */}
      <div className="hidden md:flex justify-center items-center h-full gap-8">
        {/* Left */}
        <div className="w-1/3 xl:w-1/2 flex items-center gap-12 ">
          <Link to={"/"}>
            <img
              src={logo}
              alt="Richard-Mucene-DevOps-Engineer-Johannesburg"
             className="h-24 mt-4"
            />
            <div className="text-2xl tracking-wide"></div>
          </Link>
          <div className="hidden xl:flex gap-4">
          <Link to={"/"}>Home</Link>
            <Link to={"/resume/"}>Resume</Link>
            <Link to={"/dashboard"}>Project-App</Link>
            <Link to={"/blog"}>Blog</Link>
            <Link to={"/contact"}>Contact</Link>
            
          </div>
        </div>
        {/* Right */}
        <div className="w-2/3 flex items-center justify-between gap-8 xl:w-1/2">
          <SearchBar
            onSearchSubmit={onSearchSubmit}
            search={search}
            handleSearchChange={handleSearchChange}
          />
          <NavIcons />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
