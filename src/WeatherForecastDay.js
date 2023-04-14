import React from "react";

export default function WeatherForecastDay(props) {
    
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay(); 

        let days = [
          "Sun",
          "Mon",
          "Tue",
          "Wed",
          "Thu",
          "Fri",
          "Sat",
        ];


    return days[day];
  }

  return (
      <div className="WeatherForecastDays">
        <div className="WeatherForecast-day">{day()}</div>
        <img
          src={props.data.condition.icon_url}
          alt={props.data.condition.icon}
          id="current-weather-icon"
        />
        <div className="WeatherForecast-temperatures">
          <span className="WeatherForecast-temperature-max">
            {Math.round(props.data.temperature.maximum)}°
          </span>
          <span className="WeatherForecast-temperature-min">
            {Math.round(props.data.temperature.minimum)}°
          </span>
        </div>
      </div>
    );
}