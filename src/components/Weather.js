import React from "react";
import styles from "./Weather.module.css";

const Weather = (props) => {
  return (
    <div className={styles.weatherCard}>
      <div className={styles.cardHeader}>
        <h1>{props.name}</h1>
      </div>
      <div className={styles.cardContent}>
        <p>Country: {props.country} </p>
        <p>Capital: {props.capital}</p>
        <p>Temperature: {props.temp} </p>
        <p>Humidity: {props.humidity}</p>
        <p>Population: {props.population}</p>
        <p>Date/Time: {props.dateTime}</p>
      </div>
      <div className={styles.flag}>
        <img src={props.flag} />
      </div>
    </div>
  );
};

export default Weather;
