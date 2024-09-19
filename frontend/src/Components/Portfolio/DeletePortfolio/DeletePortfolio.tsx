import React, { SyntheticEvent } from 'react'

interface Props {
    onPortfolioDelete: (e: SyntheticEvent) => void;
    portfolioValue: string;
}

const DeletePortfolio = ({onPortfolioDelete, portfolioValue}: Props) => {
  return (
   <form onSubmit={onPortfolioDelete} className=''>
    <input hidden={true} value={portfolioValue}  />
    <button className='p-2 bg-red-100 text-red-600 mt-3 font-semibold rounded-md'>Remove</button>
   </form>
  )
}

export default DeletePortfolio