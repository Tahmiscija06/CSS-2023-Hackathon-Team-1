import React, { useState } from "react";
import styles from "./Homepage.module.css";
import { Link } from "react-router-dom";

const Homepage = () => {
  const [city, setCity] = useState("");

  const handleCitySearch = () => {};
  return (
    <div className={styles.homepage}>
      <div className={styles.heading}>
        <h1>Planetary Knowledge</h1>
        <h2 className={styles.textStyle}>
          This app will give you information about Country , flags of
          countries , temperature in cities , date and time for that city. Try it!!!
        </h2>
      </div>

      <div className={styles.inputWrapper}>
        <input
          className={styles.inputField}
          type="text"
          placeholder="Enter city name"
          onChange={(event) => setCity(event.target.value)}
        />
        <Link to={`/${city}`}>
          <button>Submit</button>
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
