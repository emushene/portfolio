import React, { SyntheticEvent, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { CompanySearch } from '../company';
import { searchCompanies } from '../api';
import ListPortfolio from '../Components/Portfolio/PortfolioList/ListPortfolio';
import CardList from '../Components/CardList/CardList';
import SearchBar from '../Components/SearchBar/SearchBar';

const SearchPage: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  const [portfolioValues, setPortfolioValues] = useState<string[]>([]);
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string | null>(null);

  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get('query') || "";
    setSearch(query);
    if (query) {
      const performSearch = async (query: string) => {
        const result = await searchCompanies(query);
        if (typeof result === "string") {
          setServerError(result);
        } else if (Array.isArray(result.data)) {
          setSearchResult(result.data);
        }
      };

      performSearch(query);
    }
  }, [location.search]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSearchSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const result = await searchCompanies(search);
    if (typeof result === "string") {
      setServerError(result);
    } else if (Array.isArray(result.data)) {
      setSearchResult(result.data);
    }
  };

  const onPortfolioCreate = (e: any) => {
    e.preventDefault();
    const exists = portfolioValues.find((value) => value === e.target[0].value);
    if (exists) return;
    const updatedPortfolio = [...portfolioValues, e.target[0].value];
    setPortfolioValues(updatedPortfolio);
  };

  const onPortfolioDelete = (e: any) => {
    e.preventDefault();
    const removed = portfolioValues.filter((value) => {
      return value !== e.target[0].value;
    });
    setPortfolioValues(removed);
  };

  return (
    <div className="flex flex-col items-center min-h-screen gap-5 overflow-hidden text-blue-900 xl:mt-24 sm:mt-24">
      <div className='md:hidden border p-2 flex items-center'>
        <SearchBar
          onSearchSubmit={onSearchSubmit}
          search={search}
          handleSearchChange={handleSearchChange}
          />
      </div>
      <ListPortfolio portfolioValues={portfolioValues} onPortfolioDelete={onPortfolioDelete} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-screen-lg">
        {serverError && <h1>{serverError}</h1>}
        <CardList
          searchResults={searchResult}
          onPortfolioCreate={onPortfolioCreate}
        />
      </div>
    </div>
  );
};

export default SearchPage;
