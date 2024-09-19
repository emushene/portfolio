import React from "react";

type Config = {
  label: string;
  render: (company: any) => React.ReactNode;
};

type Props = {
  configs: Config[];
  data: any[];
};

const Table = ({ configs, data }: Props) => {
  const renderedRows = data.map((company) => (
    <tr key={company.cik}>
      {configs.map((val, idx) => (
        <td
          key={idx}
          className="p-4 whitespace-nowrap text-sm font-normal text-gray-900"
        >
          {val.render(company)}
        </td>
      ))}
    </tr>
  ));

  const renderedHeaders = configs.map((config, idx) => (
    <th
      className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wide"
      key={idx}
    >
      {config.label}
    </th>
  ));

  return (
    <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>{renderedHeaders}</tr>
        </thead>
        <tbody>{renderedRows}</tbody>
      </table>
    </div>
  );
};

export default Table;