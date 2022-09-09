import logo from "./logo.svg";
import "./App.css";
import WeatherDescription from "./WeatherDescription";
import ForecastDaily from "./ForecastDaily";
import ForecastHourly from "./ForecastHourly";

function App() {
  return (
    <div className="App">
      <div className="container">
        <WeatherDescription />
      </div>
      <div className="container"></div>
      <div className="container"></div>
    </div>
  );
}

export default App;
