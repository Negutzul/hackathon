import React from 'react';
import CompanyCard from './CompanyCard';
import CompanyInfo from './CompanyInfo';

const RightSide = ({data}) => {

  return (<>
    <CompanyCard data={data}/>
    <div></div>
    <CompanyInfo companyName ={data.company_name} /></>
  );


};

export default RightSide;