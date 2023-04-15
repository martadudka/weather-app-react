import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
    return (
      <div className="row info">

        <div className="col-3">
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
          <div className="row">
          <img
            src={props.data.iconUrl}
            alt={props.data.description}
            className="col-4"
            id="current-weather-icon"
          />
          <span className="col degrees" id="degrees">
            <WeatherTemperature celsius={props.data.temperature} />{" "}
          </span>
          </div>
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