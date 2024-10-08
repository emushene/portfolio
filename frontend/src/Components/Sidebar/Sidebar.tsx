import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaCashRegister } from "react-icons/fa";
import { MdAccountBalance, MdAccountBalanceWallet } from "react-icons/md";

type Props = {};

const Sidebar: React.FC<Props> = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="relative">
      {/* Sidebar */}
      <nav
        className={`border-2 py-4 px-6 top-0 bottom-0 w-fit sm:w-64 bg-white shadow-xl left-0 absolute flex-row flex-nowrap md:z-10 z-50 transition-all duration-300 ease-in-out transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
        role="navigation"
      >
        <div className="flex-col min-h-full px-0 flex flex-wrap items-center justify-between w-full mx-auto overflow-y-auto overflow-x-hidden">
          <div className="flex bg-white flex-col items-stretch relative mt-4 overflow-y-auto h-auto flex-1 w-fit border-2 p-2">
            <div className="flex-col flex list-none">
              <Link
                to="company-profile"
                className="flex items-center text-gray-500 text-medium uppercase font-bold py-2 no-underline"
                aria-label="Company Profile"
              >
                <FaHome />
                <h6 className="ml-3">Company Profile</h6>
              </Link>

              <Link
                to="income-statement"
                className="flex items-center text-gray-500 text-medium uppercase font-bold py-2 no-underline"
                aria-label="Income Statement"
              >
                <MdAccountBalanceWallet className="grayscale" />
                <h6 className="ml-3">Income Statement</h6>
              </Link>

              <Link
                to="balance-sheet"
                className="flex items-center text-gray-500 text-medium uppercase font-bold py-2 no-underline"
                aria-label="Balance Sheet"
              >
                <MdAccountBalance />
                <h6 className="ml-3">Balance Sheet</h6>
              </Link>

              <Link
                to="cashflow-statement"
                className="flex items-center text-gray-500 text-medium uppercase font-bold py-2 no-underline"
                aria-label="Cashflow Statement"
              >
                <FaCashRegister />
                <h6 className="ml-3">Cashflow Statement</h6>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Toggle Button */}
      <div>
      <button
        onClick={toggleSidebar}
        className="md:hidden text-white flex items-center justify-center cursor-pointer font-extrabold w-10 h-10 border rounded-full bg-orange-500 shadow-lg absolute top-4 left-4 z-50 focus:outline-2"
        aria-label="Toggle sidebar"
      >
        <i className="fas fa-bars"> </i>+
      </button>
      
      </div>
   
    </div>
  );
};

export default Sidebar;
