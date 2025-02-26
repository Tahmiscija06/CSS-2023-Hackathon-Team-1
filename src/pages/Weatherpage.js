import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Weather from "../components/Weather";
import styles from "./Weatherpage.module.css";
import { Audio } from "react-loader-spinner";

const Weatherpage = () => {
  const { city } = useParams();
  const [weatherData, setWeatherData] = useState();
  const [cityData, setCityData] = useState();
  const [countryData, setCountryData] = useState();
  const [restCountryData, setRestCountryData] = useState();
  const [dateTimeData, setDateTimeData] = useState();

  const fetchWeatherData = async () => {
    const url = `http://api.weatherapi.com/v1/current.json?key=4857ae7f8e304013b6f82636252602&q=${city}`;

    try {
      const response = await fetch(url, {});
      if (response.ok) {
        const data = await response.json();
        setWeatherData(data);
      } else {
        console.error("HTTP error", response.status);
      }
    } catch (error) {
      console.error("Fetch error", error);
    }
  };

  const fetchCityData = async () => {
    const url = `https://api.api-ninjas.com/v1/city?name=${city}`;

    try {
      const response = await fetch(url, {
        headers: { "X-Api-Key": "1ZuhryjYumU44hOnoMFJyTzzwSnOW6juabNy9eyY" },
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setCityData(data);
      } else {
        console.error("HTTP error", response.status);
      }
    } catch (error) {
      console.error("Fetch error", error);
    }
  };

  const fetchCountryData = async () => {
    const url = `https://api.api-ninjas.com/v1/country?name=${cityData[0].country}`;
    console.log(url);
    try {
      const response = await fetch(url, {
        headers: { "X-Api-Key": "1ZuhryjYumU44hOnoMFJyTzzwSnOW6juabNy9eyY" },
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setCountryData(data);
      } else {
        console.error("HTTP error", response.status);
      }
    } catch (error) {
      console.error("Fetch error", error);
    }
  };
  const fetchRestCountriesData = async () => {
    const url = `https://restcountries.com/v3.1/name/${countryData[0].name}`;
    console.log(url);
    try {
      const response = await fetch(url);

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setRestCountryData(data);
      } else {
        console.error("HTTP error", response.status);
      }
    } catch (error) {
      console.error("Fetch error", error);
    }
  };
  const fetchDateTimeData = async () => {
    const url = `http://api.weatherapi.com/v1/current.json?key=4857ae7f8e304013b6f82636252602&q=${city}`;
    console.log(url);
    try {
      const response = await fetch(url, {});

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setDateTimeData(data);
      } else {
        console.error("HTTP error", response.status);
      }
    } catch (error) {
      console.error("Fetch error", error);
    }
  };
  useEffect(() => {
    fetchWeatherData();
    fetchCityData();
    fetchDateTimeData();
  }, []);

  useEffect(() => {
    if (cityData) {
      fetchCountryData();
    }
  }, [cityData]);

  useEffect(() => {
    if (countryData) {
      fetchRestCountriesData();
    }
  }, [countryData]);

  return (
    <div className={styles.weatherPage}>
      {weatherData &&
      cityData &&
      countryData &&
      restCountryData &&
      dateTimeData ? (
        <Weather
          name={cityData[0].name}
          temp={weatherData.current.temp_c}
          humidity={weatherData.current.humidity}
          population={cityData[0].population}
          country={countryData[0].name}
          flag={restCountryData[0].flags.png}
          capital={restCountryData[0].capital}
          dateTime={weatherData.current.last_updated}
        />
      ) : (
        <Audio
          height="80"
          width="80"
          radius="9"
          color="black"
          ariaLabel="loading"
          wrapperStyle
          wrapperClass
        />
      )}
    </div>
  );
};

export default Weatherpage;
