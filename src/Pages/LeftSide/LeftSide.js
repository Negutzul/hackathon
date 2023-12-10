import React from 'react';
import { useState } from 'react';
import SearchComponent from './Search/SearchComponent';
import Map from './Map/Map';
import UnitList from './Map/UnitList';
import { useEffect } from 'react';
import Manarie from './Map/Manarie';
import CityInfoTable from "./Table/CityInfoTable";


const cityInfo =
    {
        city: 'Buzău',
        rent: '150-250',
        crimeRate: '3',
        populationDensity: '120',
        transportAccessibility: '3',
        pollutionRate: '3'
    };

const LeftSide = ({cheiaGoogul, apikey ,userPosition, setUserPositions ,
    unitPositions, setUnitPositions}) => {

//   const onClickHandler_ = (location) => {
//     setUnitPositions(null);
//   };


  return (
    <div>
        <SearchComponent cheiaGoogul={cheiaGoogul} setUserPositions={setUserPositions}/>
        <div>
        {/* <UnitList list={unitPositions} apikey={apikey} onClickHandler={onClickHandler_} /> */}
        <Manarie
            apikey={apikey}
            userPosition={userPosition}
            unitPositions = {unitPositions}
            setUserPositions = {setUserPositions}
            setUnitPositions = {setUnitPositions}
        />
        </div>
        <div>
             <CityInfoTable cityInfo={cityInfo} />
        </div>
    </div>
  );


};

export default LeftSide;