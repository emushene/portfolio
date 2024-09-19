import React, { SyntheticEvent } from 'react'

interface Props  {
    onPortfolioCreate: (e: SyntheticEvent) => void;
    symbol: string;
}

const AddPortfolio = ({onPortfolioCreate, symbol}: Props) => {
  return (
    <form onSubmit={onPortfolioCreate} className='p-4 '>
        <input readOnly={true} hidden={true} value={symbol}/>
        <button type='submit' className='bg-blue-600 p-4 rounded-md w-32 text-white border-neutral-800 transform'>Add Stock</button>

    </form>
  )
}

export default AddPortfolio