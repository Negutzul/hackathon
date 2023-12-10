import React from 'react';
import { useState } from 'react';
import SearchComponent from './Search/SearchComponent';
import Map from './Map/Map';
import UnitList from './Map/UnitList';
import { useEffect } from 'react';
import Manarie from './Map/Manarie';

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
    </div>
  );


};

export default LeftSide;