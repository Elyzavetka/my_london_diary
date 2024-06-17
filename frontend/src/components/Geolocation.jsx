import React from "react";
import { useState, useCallback, useRef, useEffect } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  useLoadScript,
} from "@react-google-maps/api";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

const mapContainerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: 37.7893,
  lng: -122.4039,
};

const libraries = ["places"];

const Geolocation = () => {
  const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAP_API_KEY;
  console.log("Google Maps API Key:", googleMapsApiKey);

  const [searchResult, setSearchResult] = useState("");
  const [map, setMap] = useState(null);
  const [predictions, setPredictions] = useState([]);

  const [mapCenter, setMapCenter] = useState(center);

  const service = useRef(null);

  const { isLoaded } = useLoadScript({
    // id: "google-map-script",

    // googleMapsApiKey: googleMapsApiKey,

    libraries,
    region: "UK",
  });

  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  useEffect(() => {
    if (isLoaded && !service.current) {
      service.current = new window.google.maps.places.AutocompleteService();
    }
  }, [isLoaded]);

  useEffect(() => {
    if (isLoaded && !service.current) {
      service.current = new window.google.maps.places.AutocompleteService();
    }
  }, [isLoaded]);

  useEffect(() => {
    console.log(service.current);
    if (searchResult && service.current) {
      service.current.getPlacePredictions(
        { input: searchResult },
        (predictions) => {
          console.log("I am here");
          setPredictions(predictions || []);
        }
      );
    } else {
      setPredictions([]);
    }
  }, [searchResult]);

  // useEffect(() => {
  //   if (!isLoaded) return;

  //   const service = new window.google.maps.places.PlacesService(mapRef.current);

  //   service.nearbySearch(
  //     {
  //       location: center,
  //       radius: "1000",
  //       type: ["cafe"],
  //     },
  //     (results, status) => {
  //       if (status === window.google.maps.places.PlacesServiceStatus.OK) {
  //         console.log(results);
  //       }
  //     }
  //   );
  // }, [isLoaded]);

  // const {
  //   ready,
  //   value,
  //   suggestions: { status, data },
  //   setValue,
  //   clearSuggestions,
  // } = usePlacesAutocomplete({
  //   // callbackName: "YOUR_CALLBACK_NAME",
  //   requestOptions: {
  //     /* Define search scope here */
  //   },
  //   debounce: 300,
  // });

  const onGetSearchResult = (e) => {
    setSearchResult(e.target.value);
  };

  const onPredictionClick = (prediction) => {
    console.log(prediction);
    const geocoder = new window.google.maps.Geocoder();

    geocoder.geocode({ placeId: prediction.place_id }, (results, status) => {
      if (status === window.google.maps.GeocoderStatus.OK) {
        const { location } = results[0].geometry;
        setMapCenter({ lat: location.lat(), lng: location.lng() });
      }
    });
  };

  // const handleSelect =
  //   ({ description }) =>
  //   () => {
  //     // When the user selects a place, we can replace the keyword without request data from API
  //     // by setting the second parameter to "false"
  //     setValue(description, false);
  //     clearSuggestions();

  //     // Get latitude and longitude via utility functions
  //     getGeocode({ address: description }).then((results) => {
  //       const { lat, lng } = getLatLng(results[0]);
  //       console.log("📍 Coordinates: ", { lat, lng });
  //     });
  //   };

  // const renderSuggestions = () =>
  //   data.map((suggestion) => {
  //     const {
  //       place_id,
  //       structured_formatting: { main_text, secondary_text },
  //     } = suggestion;

  //     return (
  //       <li key={place_id} onClick={handleSelect(suggestion)}>
  //         <strong>{main_text}</strong> <small>{secondary_text}</small>
  //       </li>
  //     );
  //   });

  if (!isLoaded) return "Loading maps";

  return (
    <div>
      <input type="text" onChange={onGetSearchResult} value={searchResult} />
      <p>Query predictions for {searchResult}:</p>
      <ul>
        {predictions.map((prediction) => (
          <li
            key={prediction.place_id}
            onClick={() => onPredictionClick(prediction)}
          >
            {prediction.description}
          </li>
        ))}
      </ul>
      {/* {status === "OK" && <ul>{renderSuggestions()}</ul>} */}
      <GoogleMap
        id="map"
        mapContainerStyle={mapContainerStyle}
        zoom={15}
        // center={{ lat: 51.5074, lng: -0.1278 }}
        center={mapCenter}
        onLoad={onMapLoad}
      >
        {/* {marker && <Marker position={marker} />} */}
      </GoogleMap>
    </div>
  );
};

export default Geolocation;
