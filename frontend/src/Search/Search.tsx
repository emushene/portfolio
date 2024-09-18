import React, { SyntheticEvent } from "react";

interface Props {
  onSearchSubmit: (e: SyntheticEvent) => void;
  search: string | undefined;
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<Props> = ({ onSearchSubmit, search, handleSearchChange }: Props): JSX.Element => {
  return (
    <div className="flex justify-center mt-4">
      <form onSubmit={onSearchSubmit} className="flex items-center">
        <input
          value={search}
          onChange={handleSearchChange}
          className="p-2 border border-gray-400 rounded-lg"
          placeholder="Type your search..."
        />
      </form>
    </div>
  );
};

export default Search;
