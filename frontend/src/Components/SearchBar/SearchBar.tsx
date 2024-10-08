import React, { SyntheticEvent } from "react";
import searchlogo from './search.png';

interface Props {
  onSearchSubmit: (e: SyntheticEvent) => void;
  search: string | undefined;
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<Props> = ({ onSearchSubmit, search, handleSearchChange }: Props) => {
  return (
    <div className="flex-1 flex items-center bg-gray-200 rounded-md p-2 mr-2">
      <form onSubmit={onSearchSubmit} className="flex items-center flex-1">
        <input
          value={search}
          onChange={handleSearchChange}
          className="p-2 border border-gray-400 rounded-md flex-1 border-none"
          placeholder="Project-App (Stock Market API)search...."
        />
        <button type="submit" className="ml-2 p-2 rounded-md text-white">
          <img
            src={searchlogo}
            alt="Search"
            className="w-6 h-6"
          />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
