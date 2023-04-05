import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ready: false});
    function handleResponse(response) {
        setWeatherData({
            ready: true,
            temperature: response.data.temperature.current,
            humidity: response.data.temperature.humidity,
            wind: response.data.wind.speed,
            city: response.data.city,
            date: "Wednesday 14:20",
            iconUrl: response.data.condition.icon_url,
            description: response.data.condition.description
        });
    }

    if (weatherData.ready) {
        return (
          <div className="weather-app">
            <form id="search-form" className="search mb-3">
              <div className="row">
                <div className="col-5">
                  <input
                    type="search"
                    id="city-search-input"
                    placeholder="Enter a city"
                    autocomplete="off"
                    className="form-control"
                  />
                </div>
                <div className="col">
                  <input
                    type="submit"
                    value="Search"
                    className="btn btn-primary"
                    id="search-button-input"
                  />
                </div>
                <div className="col">
                  <button
                    className="btn btn-success current-location-button"
                    id="current-location-button"
                  >
                    Current location
                  </button>
                </div>
              </div>
            </form>

            <div className="row info">
              <div className="col">
                <strong className="city-name" id="city-name">
                  {weatherData.city}
                </strong>
                <ul className="current-date">
                  <li>
                    Last updated: <div id="date">{weatherData.date}</div>
                  </li>
                </ul>
              </div>
              <div className="col current-temperature">
                <img
                  src={weatherData.iconUrl}
                  alt={weatherData.description}
                  id="current-weather-icon"
                />
                <span className="degrees" id="degrees">
                  {Math.round(weatherData.temperature)}
                </span>
                <span className="celsius">°C</span>
              </div>
              <div className="col">
                <strong
                  className="weather-description"
                  id="weather-description"
                >
                  {weatherData.description}
                </strong>
                <ul className="current-weather-description">
                  <li className="humidity">
                    Humidity: <span id="humidity">{weatherData.humidity}</span>%
                  </li>
                  <li className="wind">
                    Wind: <span id="wind">{weatherData.wind}</span> km/h
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );
    }else{
    const apiKey = "1d1a4ta9d508e3cb925a520dd24fdc3o";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading..."
    }
}