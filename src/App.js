import logo from "./logo.svg";
import "./App.css";
import WeatherDescription from "./WeatherDescription";
import ForecastDaily from "./ForecastDaily";
import ForecastHourly from "./ForecastHourly";

/**  "id": 3492908,
   "name": "Santo Domingo", */

function App() {
  return (
    <div className="App">
      <WeatherDescription />
      <ForecastHourly />
      <ForecastDaily />
    </div>
  );
}

export default App;
