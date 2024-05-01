import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "./Cards";

const Countries = () => {
  const [data, setData] = useState([]);
  const [rangeValue, setRangeValue] = useState([36]);
  const radios = ["Africa", "America", "Asia", "Europe", "Oceania"];
  const [selectedRadio, setSelectedRadio] = useState([""]);
  // Le useEffect se joue lorsque le composant est monté
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setData(res.data));
  }, []);

  return (
    <div className="countries">
      <ul className="radio-container">
        <input
          type="range"
          min="1"
          max="250"
          defaultValue={rangeValue}
          onChange={(e) => setRangeValue(e.target.value)}
        />
        {radios.map((continent) => {
          return (
            <li>
              <input
                type="radio"
                id={continent}
                name="continentRadio"
                checked={continent === selectedRadio} // Lorsqu'on annule la recherche, ça retire le point dans la case radio
                onChange={(e) => setSelectedRadio(e.target.id)}
              />
              <label htmlFor={continent}>{continent}</label>
            </li>
          );
        })}
      </ul>
      {/* Créer un bouton qui permet d'annuler les évenements radios */}
      {selectedRadio && (
        <button onClick={() => setSelectedRadio("")}>
          Annuler la recherche
        </button>
      )}
      <ul>
        {data
          .filter((country) => country.continents[0].includes(selectedRadio)) // Filtre les pays par rapport au continent
          .sort((a, b) => b.population - a.population) // Trie les pays par rapport au nombre d'habitant
          .slice(0, rangeValue) // Coupe l'affichage
          .map((country, index) => (
            <Cards key={index} country={country} />
          ))}
      </ul>
    </div>
  );
};

export default Countries;
