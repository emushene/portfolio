import React from 'react'
import Table from '../../Components/Table/Table'
import RatioList from '../../Components/RatioList/RatioList'
import { testIncomeStatementData } from '../../Components/Table/TestData'


type Props = {}

const tableConfig = [
  {
    label: "Market Cap",
    render: (company: any) => company.marketCapTTM,
    subTitle: "Total value of all a company's shares of stock",
  },
]

const DesignPage = (props: Props) => {
  return (
    <>
    <h1 className='mt-20'>Richard Design Page</h1>
    <h2>This is my design page. We will house various design aspects of the website and the App.</h2><br />
   <h1>RATIO LIST</h1>
    <RatioList data={testIncomeStatementData} config={tableConfig}/>
    <h1>END RATIO LIST</h1>
     <Table data={testIncomeStatementData} configs={tableConfig}/>
    </>
  )
}

export default DesignPage


