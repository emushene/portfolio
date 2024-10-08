import React, { ChangeEvent, SyntheticEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "./logo.png";
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
    if (search.trim()) {
      // Check if the search term is not empty before navigating
      navigate(`/search?query=${encodeURIComponent(search)}`); // Navigate to SearchPage with search query
    }
  };

  return (
    <div className="select-none sticky top-0 z-50 bg-gray-400 md:bg-white h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 border-b border-gray-300">
      {/* MOBILE View */}
      <div className="md:hidden flex items-center justify-between w-full p-3">
       <div className="flex items-center gap-1">
        <div className="rounded-full border h-8 w-8 flex items-center p-1 "><img src={logo} alt="Richard-Mucene-DevOps" height={44} width={44}  /></div>
        
       <Link to={"/"}>
          <div className="text-2xl tracking-wide text-gray-700 font-semibold">Richard</div>
        </Link>
        </div> 
        <div className="flex items-center">
        <Menu />
        </div>
        
      </div>

      {/* Larger Screen View */}
      <div className="hidden md:flex justify-center items-center h-full gap-8 sm:text-sm">
        {/* Left Section */}
        <div className="w-1/3 xl:w-1/2 flex items-center gap-12">
          <Link to={"/"}>
          <div className="rounded-full border-2 p-2">
          <img
              src={logo}
              alt="Richard-Mucene-DevOps-Engineer-Johannesburg"
              className="h-5 w-5"
            />
          </div>
             
          </Link>

          <div className="hidden xl:flex gap-4 text-sm">
            <Link to={"/"}>
              <h2 className="text-sm sm:text-lg md:text-xl hover:text-rose-400 hover:font-extrabold text-orange-900">
                Home
              </h2>
            </Link>
            <Link to={"/resume/"}>
              <h2 className="text-sm sm:text-lg md:text-xl hover:font-extrabold hover:text-rose-400 text-orange-900">
                Resume
              </h2>
            </Link>
            <Link to={"/company/search"}>
              <h2 className="text-sm sm:text-lg md:text-xl hover:font-extrabold hover:text-rose-400 text-orange-900">
                Project-App
              </h2>
            </Link>
            <Link to={"/blog"}>
              <h2 className="text-sm sm:text-lg md:text-xl hover:font-extrabold hover:text-rose-400 text-orange-900">
                Blog
              </h2>
            </Link>
            <Link to={"/contact"}>
              <h2 className="text-sm sm:text-lg md:text-xl hover:font-extrabold hover:text-rose-400 text-orange-900">
                Contact
              </h2>
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-2/3 flex items-center justify-between gap-8 xl:w-1/2 ">
          {/* SearchBar integrated with proper props */}
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
