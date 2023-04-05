import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
    return (
      <div className="row info">
        <div className="col">
          <strong className="city-name" id="city-name">
            {props.data.city}
          </strong>
          <ul className="current-date">
            <li>
              Last updated:{" "}
              <div id="date">
                <FormattedDate date={props.data.date} />
              </div>
            </li>
          </ul>
        </div>
        <div className="col current-temperature">
          <img
            src={props.data.iconUrl}
            alt={props.data.description}
            id="current-weather-icon"
          />
          <span className="degrees" id="degrees">
            {Math.round(props.data.temperature)}
          </span>
          <span className="celsius">°C</span>
        </div>
        <div className="col">
          <strong className="weather-description" id="weather-description">
            {props.data.description}
          </strong>
          <ul className="current-weather-description">
            <li className="humidity">
              Humidity: <span id="humidity">{props.data.humidity}</span>%
            </li>
            <li className="wind">
              Wind: <span id="wind">{props.data.wind}</span> km/h
            </li>
          </ul>
        </div>
      </div>
    );
}