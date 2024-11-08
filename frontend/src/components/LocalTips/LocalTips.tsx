import React from "react";
import { useState, useEffect } from "react";
import { createContext } from "react";
import styles from "./LocalTips.module.css";
import Geolocation from "../Geolocation/Geolocation";
import LocalTip from "./LocalTip/LocalTip";

export const AddressContext = createContext("");

interface Entry {
  id: string;
  title: string;
  description: string;
  img: string;
}

const Recomendations = () => {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [predictionAddress, setPredictionAddress] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/localtips/").then((response) =>
      response.json().then((entries) => {
        setEntries(entries);
      })
    );
  }, []);

  return (
    <div className={styles.localTipsContainer}>
      <p className={styles.localTipsHeader}>📍Local Tips</p>
      <AddressContext.Provider value={predictionAddress}>
        <Geolocation
          predictionAddress={predictionAddress}
          setPredictionAddress={setPredictionAddress}
        />
      </AddressContext.Provider>
      <h1 className={styles.localTipHeader}>
        <span className={styles.fontStyleFranklin}>📍Local </span>
        <span>Gems:</span>
        <div></div>
      </h1>
      {entries.map((el) => (
        <div className={styles.localTip}>
          <LocalTip el={el} />
        </div>
      ))}
    </div>
  );
};

export default Recomendations;
