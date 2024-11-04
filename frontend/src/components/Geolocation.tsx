import React from "react";
import { useDebounce } from "@uidotdev/usehooks";
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
import Modal from "./Modal/Modal";
import styles from "./Geolocation.module.css";

type AutocompleteService = google.maps.places.AutocompleteService;
type AutocompletePrediction = google.maps.places.AutocompletePrediction;
const mapContainerStyle = {
  width: "400px",
  height: "400px",
};
const center = {
  lat: 51.5074,
  lng: -0.1278,
};

const googleApiKey = process.env.REACT_APP_GOOGLE_MAP_API_KEY;
console.log(googleApiKey);

async function getGoogleMapsApiKey() {
  const response = await fetch("http://localhost:3001/api-key");
  const apiKey = await response.json();
  return apiKey;
}
let googleMapsApiKey;

const Geolocation = () => {
  const [key, setKey] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchResult, setSearchResult] = useState("");
  const [map, setMap] = useState(null);
  const [predictions, setPredictions] = useState<AutocompletePrediction[]>([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [predictionAddress, setPredictionAddress] = useState("");
  const [mapCenter, setMapCenter] = useState(center);
  const debouncedSearchTerm = useDebounce(searchResult, 350);

  const service = useRef<AutocompleteService | null>(null);

  useEffect(() => {
    getGoogleMapsApiKey()
      .then((apiKey) => {
        setKey(apiKey);
      })
      .catch((error) => {
        console.error("Error fetching API key:", error);
      });
  }, []);

  const { isLoaded } = useLoadScript({
    // id: "google-map-script",
    googleMapsApiKey: googleApiKey!,
    // googleMapsApiKey: key || "",

    libraries: ["places"],
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

  const onGetSearchResult = (e) => {
    setSearchResult(e.target.value);
    console.log(service.current);
  };

  useEffect(() => {
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
  }, [debouncedSearchTerm]);

  const onPredictionClick = (prediction) => {
    console.log(prediction);
    const geocoder = new window.google.maps.Geocoder();

    geocoder.geocode({ placeId: prediction.place_id }, (results, status) => {
      if (status === window.google.maps.GeocoderStatus.OK) {
        if (results) {
          const { location } = results[0].geometry;
          setMapCenter({ lat: location.lat(), lng: location.lng() });
        }
      }
    });
  };

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
            className={styles.predictionItem}
          >
            <button
              className={styles.invisibleBtn}
              onClick={() => {
                setModalIsOpen(true);
                setPredictionAddress(prediction.description);
                console.log({ prediction });
              }}
            >
              {prediction.description}
            </button>
          </li>
        ))}
      </ul>
      <GoogleMap
        id="map"
        mapContainerStyle={mapContainerStyle}
        zoom={15}
        center={{ lat: 51.5074, lng: -0.1278 }}
        onLoad={onMapLoad}
      ></GoogleMap>
      <Modal
        isOpen={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
        address={predictionAddress}
      />
    </div>
  );
};

export default Geolocation;
