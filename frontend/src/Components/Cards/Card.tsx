import React, { SyntheticEvent } from "react";
import { CompanySearch } from "../../company";
import AddPortfolio from "../Portfolio/AddPortfolio/AddPortfolio";
import { Link } from "react-router-dom";

interface Props {
  id: string;
  searchResult: CompanySearch;
  onPortfolioCreate: (e: SyntheticEvent) => void;
}

const Card: React.FC<Props> = ({ id, searchResult, onPortfolioCreate }: Props): JSX.Element => {
  return (
    <div className="container flex flex-wrap gap-4">
      <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg flex flex-col overflow-hidden">
        <div className="h-60vh m-6">
          <img
            className="w-auto object-contain"
            src="https://logodownload.org/wp-content/uploads/2019/07/nasdaq-logo-0.png"
            alt="company logo"
          />
        </div>
        <div className="border-l-teal-900 flex justify-between m-4">
          <Link to={`/company/${searchResult.symbol}`} className="text-gray-700 text-2xl">
            {searchResult.name} ({searchResult.symbol})
          </Link>
          <p className="text-black">${searchResult.currency}</p>
        </div>
        <p className="text-gray-400 m-3">
          {searchResult.exchangeShortName} - {searchResult.stockExchange}
        </p>
        <AddPortfolio onPortfolioCreate={onPortfolioCreate} symbol={searchResult.symbol} />
      </div>
    </div>
  );
};

export default Card;
