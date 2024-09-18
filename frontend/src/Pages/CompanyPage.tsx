import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { CompanyProfile } from '../company';
import { getCompanyProfile } from '../api';
import Sidebar from '../Components/Sidebar/Sidebar';
import CompanyDashboard from '../Components/CompanyDashboard/CompanyDashboard';
import Tile from '../Components/CompanyTiles/Tile';

interface Props {}

const CompanyPage = (props: Props) => {
  let { ticker } = useParams();
  const [company, setCompany] = useState<CompanyProfile>();

  useEffect(() => {
    const getProfileInit = async () => {
      if (!ticker) return; // Ensure ticker is defined
      const result = await getCompanyProfile(ticker);
      setCompany(result?.data?.[0]); // Safely access the data array
    };
    getProfileInit();
  }, [ticker]); // Add ticker as a dependency

  return (
    <div className='container h-[90vh]'>
      {company ? (
        <div className="w-full relative flex m-44 ct-docs-disable-sidebar-content overflow-x-hidden sm:mt-16 xl:mt-32 sm:h-[88vh] xl:h-[90vh]">

        <Sidebar/>
        <CompanyDashboard ticker={ticker!}>
          <Tile title="Company Name" subTitle={company.companyName}></Tile>
            </CompanyDashboard>


      </div>
      ) : (
        <div>Company not Found!</div>
      )}
    </div>
  );
};

export default CompanyPage;
