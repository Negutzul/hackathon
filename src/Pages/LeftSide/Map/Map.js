import React, { useRef, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import L from 'leaflet'; // Import Leaflet library for custom icons
import 'leaflet/dist/leaflet.css'; // Ensure Leaflet CSS is imported
import { Circle } from 'react-leaflet';
import { useMapEvents } from 'react-leaflet';



const Map = ({ center, zoom, unitPositions, setUserPositions, setUnitPositions}) => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.setView(center, zoom);
    }
  }, [center, zoom]);


  const blueMarkerIcon = L.divIcon({
    className: 'custom-marker',
    iconSize: [4, 4],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
    html: '<div style="background-color: green; border-radius: 50%; width: 20px; height: 20px;"></div>',
  });  
  const redMarkerIcon = L.divIcon({
    className: 'custom-marker',
    iconSize: [4, 4],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
    html: '<div style="background-color: red; border-radius: 50%; width: 20px; height: 20px;"></div>',
  });
  function onMapClick(e) {
    debugger
}

  return (
    <div id="map" style={{ width: '100%', height: '400px' }}>
      <MapContainer
        center={center}
        zoom={zoom}
        style={{ width: '100%', height: '100%' }}
        ref={mapRef}
        onClick={onMapClick}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        
        <Circle
            key={0}
            center={center}
            color='green'
            fillColor='#00FF00'
            fillOpacity={0.5}
            radius={50}
          >
            <Popup>
            Red pointer is here! 
            </Popup>
          </Circle>
        
        {unitPositions.map((position, index) => (
          <Circle
            key={index+1}
            center={position.location}
            color='red'
            fillColor='#f03'
            fillOpacity={0.5}
            radius={50}
          >
            <Popup>
            Red pointer is here! 
            </Popup>
          </Circle>
        ))}
              <MyComponent setUserPositions={setUserPositions} setUnitPositions={setUnitPositions}/>

      </MapContainer>
    </div>
  );
};

export default Map;


function MyComponent({setUserPositions, setUnitPositions}) {
  const map = useMapEvents({
    click: (e) => {
      setUnitPositions([
        {
          name: "The Fish Market",
          location: { lat: 44.443995, lng: 26.094200 },
        },
        {
          name: "Bæjarins Beztu Pylsur",
          location: { lat: 44.447995, lng: 26.104200 },
        },
      ])
      setUserPositions(e.latlng);
    },
    locationfound: (location) => {
      debugger
      console.log('location found:', location)
    },
  })
  return null
}