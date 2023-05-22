import Icon from "./Icon.js";
import "../components/scss/firstcolumn.scss";
import "../components/scss/main.scss";
import { tempConv, windConv, getDay } from "./conventers.js";
function FirstColumn({ state, settings, setSettings }) {
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <>
      <div className="flex">
        <div className="flex">
          <Icon a={state[0][settings.index].weather[0].id} />

          <h1>{tempConv(state[0][settings.index].main.temp, settings.unit)}</h1>
          <div
            className={` ${
              settings.unit == 0 ? "divtempBtn" : "divtempBtn reverse"
            }`}
          >
            <button
              className={` ${settings.unit == 0 ? "tempBtn bold" : "tempBtn"}`}
              onClick={() => {
                setSettings({
                  ...settings,
                  unit: 0,
                });
              }}
            >
              °C
            </button>
            <div className="vl"></div>

            <button
              className={` ${settings.unit == 1 ? "tempBtn bold" : "tempBtn"}`}
              onClick={() => {
                setSettings({
                  ...settings,
                  unit: 1,
                });
              }}
            >
              °F
            </button>
          </div>

          <div className="grid">
            <p>
              Probability of precipitation: {state[0][settings.index].pop * 100}
              %
            </p>
            <p>Humidity: {state[0][settings.index].main.humidity}% </p>
            <p>
              Wind:{" "}
              {windConv(state[0][settings.index].wind.speed, settings.unit)}
            </p>
          </div>
        </div>
        <div>
          <h3>{settings.city}</h3>
          <h4>{state[0][settings.index].weather[0].description}</h4>
          <h4>
            {getDay(state[0][settings.index].dt, settings.timezone)},{" "}
            {new Date(
              (state[0][settings.index].dt +
                Number.parseInt(settings.timezone)) *
                1000
            ).getHours()}
            :00
          </h4>
        </div>
      </div>
    </>
  );
}

export default FirstColumn;
