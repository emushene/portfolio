import React, { useEffect, useState } from "react";
import { CompanyIncomeStatement } from "../../company";
import {
  formatLargeMonetaryNumber,
  formatRatio,
} from "../../Helpers/HelpFunctions";
import { useOutletContext } from "react-router";
import { getIncomeStatement } from "../../api";
import Table from "../Table/Table";

type Props = {};

const configs = [
  { label: "Date", render: (company: CompanyIncomeStatement) => company.date },
  {
    label: "Revenue",
    render: (company: CompanyIncomeStatement) =>
      formatLargeMonetaryNumber(company.revenue),
  },
  {
    label: "Cost Of Revenue",
    render: (company: CompanyIncomeStatement) =>
      formatLargeMonetaryNumber(company.costOfRevenue),
  },
  {
    label: "Depreciation",
    render: (company: CompanyIncomeStatement) =>
      formatLargeMonetaryNumber(company.depreciationAndAmortization),
  },
  {
    label: "Operating Income",
    render: (company: CompanyIncomeStatement) =>
      formatLargeMonetaryNumber(company.operatingIncome),
  },
  {
    label: "Income Before Taxes",
    render: (company: CompanyIncomeStatement) =>
      formatLargeMonetaryNumber(company.incomeBeforeTax),
  },
  {
    label: "Net Income",
    render: (company: CompanyIncomeStatement) =>
      formatLargeMonetaryNumber(company.netIncome),
  },
  {
    label: "Net Income Ratio",
    render: (company: CompanyIncomeStatement) =>
      formatRatio(company.netIncomeRatio),
  },
  {
    label: "Earnings Per Share",
    render: (company: CompanyIncomeStatement) => formatRatio(company.eps),
  },
  {
    label: "Earnings Per Diluted",
    render: (company: CompanyIncomeStatement) =>
      formatRatio(company.epsdiluted),
  },
  {
    label: "Gross Profit Ratio",
    render: (company: CompanyIncomeStatement) =>
      formatRatio(company.grossProfitRatio),
  },
  {
    label: "Operating Income Ratio",
    render: (company: CompanyIncomeStatement) =>
      formatRatio(company.operatingIncomeRatio),
  },
  {
    label: "Income Before Taxes Ratio",
    render: (company: CompanyIncomeStatement) =>
      formatRatio(company.incomeBeforeTaxRatio),
  },
];

const IncomeStatement = (props: Props) => {
  const ticker = useOutletContext<string>();
  const [incomeStatement, setIncomeStatement] = useState<
    CompanyIncomeStatement[] | undefined
  >();

  useEffect(() => {
    const incomeStatementGet = async () => {
      const result = await getIncomeStatement(ticker);
      setIncomeStatement(result!.data);
    };
    incomeStatementGet();
  }, [ticker]);

  return (
    <>
      {incomeStatement ? (
        <Table configs={configs} data={incomeStatement} />
      ) : (
        <>Loading....</>
      )}
    </>
  );
};

export default IncomeStatement;