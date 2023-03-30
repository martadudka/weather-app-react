import React from "react";
import "./Weather.css";

export default function Weather() {
    return (
      <div class="weather-app">
        <form id="search-form" class="search mb-3">
          <div class="row">
            <div class="col-5">
              <input
                type="search"
                id="city-search-input"
                placeholder="Enter a city"
                autocomplete="off"
                class="form-control"
              />
            </div>
            <div class="col">
              <input
                type="submit"
                value="Search"
                class="btn btn-primary"
                id="search-button-input"
              />
            </div>
            <div class="col">
              <button
                class="btn btn-success current-location-button"
                id="current-location-button"
              >
                Current location
              </button>
            </div>
          </div>
        </form>
        <div class="row info">
          <div class="col">
            <strong class="city-name" id="city-name">
              Rome
            </strong>
            <ul class="current-date">
              <li>
                Last updated: <div id="date">Wednesday, 14:20</div>
              </li>
            </ul>
          </div>
          <div class="col current-temperature">
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
              alt="clear sky"
              id="current-weather-icon"
            />
            <span class="degrees" id="degrees">
              20
            </span>
            <span class="celsius">°C</span>
          </div>
          <div class="col">
            <strong class="weather-description" id="weather-description">
              Clear sky
            </strong>
            <ul class="current-weather-description">
              <li class="humidity">
                Humidity: <span id="humidity">12</span>%
              </li>
              <li class="wind">
                Wind: <span id="wind">1</span> km/h
              </li>
            </ul>
          </div>
        </div>

        <footer className="Footer-Link">
          This project was coded by{" "}
          <a
            href="https://martadudka.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Marta Dudka
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/martadudka/weather-app-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    );
}