import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ready: false});
    const [city, setCity] = useState(props.defaultCity);
    function handleResponse(response) {
        setWeatherData({
            ready: true,
            temperature: response.data.temperature.current,
            humidity: response.data.temperature.humidity,
            wind: response.data.wind.speed,
            city: response.data.city,
            date: new Date(response.data.time * 1000),
            iconUrl: response.data.condition.icon_url,
            description: response.data.condition.description
        });
         console.log(response.data);
    }

    function search() {
        const apiKey = "1d1a4ta9d508e3cb925a520dd24fdc3o";
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    }
 
    function handleSubmit(event) {
        event.preventDefault();
        search(city);
    }

    function handleCityChange(event) {
        setCity(event.target.value);
    }

    if (weatherData.ready) {
        return (
          <div className="weather-app">
            <form onSubmit={handleSubmit} id="search-form" className="search mb-3">
              <div className="row">
                <div className="col-5">
                  <input
                    type="search"
                    id="city-search-input"
                    placeholder="Enter a city"
                    autoFocus="on"
                    className="form-control"
                    onChange={handleCityChange}
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
            <WeatherInfo data={weatherData} />
          </div>
        );
    }else{
        search();
        return "Loading..."
    }
}