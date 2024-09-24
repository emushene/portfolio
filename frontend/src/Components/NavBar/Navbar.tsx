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
    <div className="select-none sticky top-0 z-50 bg-white h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 border-b border-gray-300"> {/* Added border-b */}
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
              className="h-24 mt-4 hidden"
            />
            <div className="text-2xl tracking-wide"></div>
          </Link>
          <div className="hidden xl:flex gap-4 text-xl ">
            <Link to={"/"} ><h2 className="text-xl hover:font-bold hover:text-rose-400 text-orange-900">Home</h2></Link>
            <Link to={"/resume/"}><h2 className="text-xl  hover:font-bold hover:text-rose-400 text-orange-900" >Resume</h2> </Link>
            <Link to={"/company/search"}><h2 className="text-xl  hover:font-bold hover:text-rose-400 text-orange-900">Project-App</h2> </Link>
            <Link to={"/blog"}><h2 className="text-xl  hover:font-bold hover:text-rose-400 text-orange-900">Blog</h2> </Link>
            <Link to={"/contact"}><h2 className="text-xl hover:font-bold hover:text-rose-400 text-orange-900">Contact</h2> </Link>
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
