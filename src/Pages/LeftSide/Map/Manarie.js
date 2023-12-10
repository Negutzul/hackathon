import React, { useEffect, useRef } from 'react';
import Map from './Map';

const Manarie = (props) => {
  return <Map  
  center={props.userPosition}
  zoom = {10}
  unitPositions = {props.unitPositions}
  setUnitPositions = {props.setUnitPositions}  
  setUserPositions = {props.setUserPositions}
  />
};

export default Manarie;