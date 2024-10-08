import React, { SyntheticEvent } from "react";
import Card from "../Cards/Card";
import { CompanySearch } from "../../company";
import { v4 as uuidv4} from "uuid";

interface Props {
  searchResults: CompanySearch[];
  onPortfolioCreate: (e: SyntheticEvent) => void;
}

const CardList: React.FC<Props> = ({ searchResults, onPortfolioCreate}: Props): JSX.Element => {
  return (
    <>
      {searchResults.length > 0 ? (
        searchResults.map((result) => {
          return <Card id={result.symbol} key={uuidv4()} searchResult={result} onPortfolioCreate={onPortfolioCreate}/>;
        })
      ) : (
        <div className="flex">
          <p className="mb-3 mt-3 text-xl font-semibold text-center md:text-xl">
            There are currently no results for your search. </p>
       
        </div>
        
      )}
    </>
  );
};

export default CardList;
