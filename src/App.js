import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app">
        <Weather defaultCity="Rome" />
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
      </div>
    </div>
  );
}