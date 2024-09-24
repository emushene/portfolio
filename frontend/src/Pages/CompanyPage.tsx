import React, { ChangeEvent, SyntheticEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { CompanyProfile } from "../company";
import { getCompanyProfile } from "../api";
import Sidebar from "../Components/Sidebar/Sidebar";
import CompanyDashboard from "../Components/CompanyDashboard/CompanyDashboard";
import Tile from "../Components/CompanyTiles/Tile";
import SearchBar from "../Components/SearchBar/SearchBar";

interface Props {}

const CompanyPage = (props: Props) => {
  const [search, setSearch] = useState<string>("");
  let { ticker } = useParams();
  const [company, setCompany] = useState<CompanyProfile>();
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    const getProfileInit = async () => {
      if (!ticker) return; // Ensure ticker is defined
      const result = await getCompanyProfile(ticker);
      setCompany(result?.data?.[0]); // Safely access the data array
    };
    getProfileInit();
  }, [ticker]); // Add ticker as a dependency

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearch(e.target.value);
  };

  const onSearchSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    navigate(`/search?query=${encodeURIComponent(search)}`); // Navigate to SearchPage with search query
  };

  return (
    <div className=" select-none h-[90vh] overflow-hidden">
      {company ? (
        <div
          className=" w-[90vw] relative flex m-44 ct-docs-disable-sidebar-content
         overflow-x-hidden sm:mt-16 xl:mt-32 sm:h-[88vh] xl:h-[90vh]"
        >
          
          <Sidebar />
          <CompanyDashboard ticker={ticker!}>
            <Tile title="Company Name" subTitle={company.companyName}></Tile>
            <Tile title="Address" subTitle={company.address}></Tile>
            <Tile title="Website" subTitle={company.website}></Tile>
            <Tile title="Telephone" subTitle={company.phone}></Tile>
          </CompanyDashboard>
        </div>
      ) : (
        <div
          className="w-[80vw] flex sm:m-16 md:m-32 xl:mr-64 ct-docs-disable-sidebar-content
          overflow-x-hidden sm:mt-2 xl:mt-16 sm:h-[88vh] xl:h-[90vh] flex-col items-center"
        >
          <h3 className="sm:text-sm md:text-3xl font-bold">HOW TO USE</h3>
          <h3 className="p-3 text-sm font-thin"> Demonstrating real live Backend API intergration skills, ASP.NET & AXIOS using(Financial Modeling Prep API) </h3>
          <h3 className="p-3 text-sm font-thin">Financial Modeling Prep API has a daily limit of 200 Call. IF you get.. "Request failed with status code 429". Try it later! </h3>
          <p className="text-sm text-gray-500 text-justify tracking-wide text-wrap p-6 shadow-lg font-semibold ">
            Please enter a NASDAQ stock symbol (e.g., AAPL for Apple Inc., MSFT
            for Microsoft Corporation, TSLA for Tesla, Inc., GOOGL for Alphabet
            Inc., AMZN for Amazon.com, Inc., NFLX for Netflix, Inc., NVDA for
            NVIDIA Corporation, INTC for Intel Corporation, ADBE for Adobe Inc.,
            FB for Meta Platforms, Inc.) in the SEARCH BAR. Once the results
            appear, click on your desired stock to view LIVE detailed information,
            including stock specifications, prices, company address, and more. 
          </p>
          
          <div className="mt-4 md:hidden w-[90%]">
            <SearchBar
              onSearchSubmit={onSearchSubmit}
              search={search}
              handleSearchChange={handleSearchChange}
            />
           
          </div>
        </div>
      )}
    </div>
  );
};

export default CompanyPage;
