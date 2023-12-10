import React, { useState, useEffect } from 'react';
import { TERipple } from 'tw-elements-react';

const SearchComponent = (props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [predictions, setPredictions] = useState([]);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${props.cheiaGoogul}&libraries=places`;
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      const autocompleteService = new window.google.maps.places.AutocompleteService();
      const input = document.getElementById('search-input');
      input.addEventListener('input', handleSearchChange);
    };

  }, []);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value) {
      const request = {
        input: value,
        types: ['geocode'],
      };

      const autocompleteService = new window.google.maps.places.AutocompleteService();
      autocompleteService.getPlacePredictions(request, handlePredictions);
    } else {
      setPredictions([]);
    }
  };

  const handlePredictions = (results, status) => {
    if (status === window.google.maps.places.PlacesServiceStatus.OK) {
      setPredictions(results);
    } else {
      setPredictions([]);
    }
  };

  const handlePredictionClick = (prediction) => {
    const placeService = new window.google.maps.places.PlacesService(document.createElement('div'));

    placeService.getDetails({ placeId: prediction.place_id }, (place, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        
        props.setUserPositions({lat: place.geometry.location.lat(), lng:place.geometry.location.lng()});
        
      }
    });

    // Clear predictions after clicking
    setPredictions([]);
  };

  return (
    <>
      <div className="block rounded-lg bg-white md:w-100 relative">
        <div className="mb-4 flex w-full items-stretch rounded-lg">
          <input
            id="search-input"
            type="search"
            value={searchTerm}
            onChange={handleSearchChange}
            className="relative block w-full min-w-0 rounded-lg border border-solid border-neutral-300 bg-transparent bg-clip-padding py-[0.25rem] text-base font-normal text-neutral-700 outline-none transition duration-200 ease-in-out focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="button-addon1"
          />

          {/* Suggestions Dropdown */}
          {predictions.length > 0 && (
            <ul className="absolute z-10 w-full bg-white border border-gray-300 mt-1 rounded-md shadow-lg top-full">
              {predictions.map((prediction) => (
                <li
                  key={prediction.place_id}
                  className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                  onClick={() => handlePredictionClick(prediction)}
                >
                  {prediction.description}
                </li>
              ))}
            </ul>
          )}

          {/* Search button */}
          <TERipple color="light">
            <button
              className="relative z-[2] flex items-center rounded-r bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-black shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
              type="button"
              id="button-addon1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </TERipple>
        </div>
      </div>
    </>
  );
};

export default SearchComponent;