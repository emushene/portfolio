import React, { SyntheticEvent } from 'react'
import DeletePortfolio from '../DeletePortfolio/DeletePortfolio';
import { Link } from 'react-router-dom';

interface Props {
    portfolioValue: string;
    onPortfolioDelete: (e: SyntheticEvent) => void;
}

const CardPortfolio = ({portfolioValue, onPortfolioDelete}: Props) => {
  return (
    <div className='shadow flex flex-col items-center border p-4 flex-wrap rounded-sm'>
    <Link to={`/company/${portfolioValue}`}>{portfolioValue}</Link>
    <DeletePortfolio onPortfolioDelete={onPortfolioDelete} portfolioValue={portfolioValue}/>
    </div>
  )
}

export default CardPortfolio