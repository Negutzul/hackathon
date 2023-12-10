import './App.css';
import LeftSide from './Pages/LeftSide/LeftSide';
import RightSide from './Pages/Right Side/RightSide';
import { useState } from 'react';


function App() {
  
const apikey = 'ftWQDHD12hXKn_33LqAOBSnbA1yD8FlLN686IxJcbpg'
const cheiaGoogul = 'AIzaSyASvupZkXbQ9UhfrBawLGajj05PPavEfpw'
const [userPosition, setUserPositions] = useState({ lat: 44.435589, lng: 26.098857 });
  const [unitPositions, setUnitPositions] = useState([
    {
      name: "The Fish Market",
      location: { lat: 44.433995, lng: 26.094200 },
      company_supplier_types: [
        "manufacturer"
        ],
        company_name: "Napolact",
        company_legal_names: [
            "Napolact S.A."
        ],
        main_country: "Romania",
        short_description: "Cei 67 de ani de tradiție ne motivează să oferim tuturor românilor lactate de calitate. De aceea, colaborăm cu 1000 de fermieri din Ardeal pentru a duce mai departe gustul autentic și delicios al produselor noastre.",
        main_business_category: "Dairy Products - Farms & Stores",
        primary_email: "recrutare.romania@frieslandcampina.com",
        website_url: "https://www.napolact.ro/",
        facebook_url: "https://www.facebook.com/napolact/",
        twitter_url: null,
        instagram_url: "https://instagram.com/napolact.romania",
        linkedin_url: "https://linkedin.com/company/napolact",
        youtube_url: "https://www.youtube.com/c/NapolactRomania",
    },
    {
      name: "Bæjarins Beztu Pylsur",
      location: { lat: 44.437995, lng: 26.104200 },
    },
  ]);
    return (
      <div className="app-container">
        <div className="left-side">
          <div className="left-content">
            
            <LeftSide apikey={apikey} cheiaGoogul={cheiaGoogul}
             userPosition={userPosition} setUserPositions ={setUserPositions}
             unitPositions={unitPositions} setUnitPositions={setUnitPositions}/>
          </div>
        </div>
  
        <div className="right-side">
          {/* Your right side component content */}
          <div className="right-content">
            {/* Add your component content here */}
            <RightSide data = {unitPositions[0]}/>
          </div>
  
          {/* Additional boxes below the right side component */}
          <div className="box-container">
            <div className="box blue-box"></div>
            <div className="box purple-box"></div>
            <div className="box blue-box"></div>
          </div>
        </div>
      </div>
    );    
}

export default App;
