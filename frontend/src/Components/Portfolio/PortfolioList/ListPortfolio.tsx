import React, { SyntheticEvent } from 'react'
import CardPortfolio from '../CardPortfolio/CardPortfolio';

interface Props {
    portfolioValues: string[];
    onPortfolioDelete: (e: SyntheticEvent) => void;
}

const ListPortfolio = ({portfolioValues, onPortfolioDelete}: Props) => {
  return (
    <div className='flex flex-col items-center w-[90vw] mb-8'>
    <h1 className='text-xl'>Portfolio </h1>
    <ul className='shadow p-8 flex items-center gap-20 w-auto flex-wrap'>
        {portfolioValues && 
            portfolioValues.map((portfolioValue ) => {
                return <CardPortfolio portfolioValue={portfolioValue} onPortfolioDelete={onPortfolioDelete}/> })}
    </ul>
    </div>
  )
}

export default ListPortfolio