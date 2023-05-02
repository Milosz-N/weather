import Icon from "./Icon.js";
import "../components/scss/firstcolumn.scss";
import "../components/scss/main.scss";
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

          <>
            <h1>
              {Number.parseInt(
                settings.unit == 0
                  ? `${Number.parseInt(
                      state[0][settings.index].main.temp - 273.15
                    )}`
                  : `${Number.parseInt(
                      (state[0][settings.index].main.temp - 273.15) * 1.8 + 32
                    )}`
              )}
            </h1>
          </>
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
              Wind:
              {Number.parseInt(settings.unit) == 0
                ? `${
                    Number.parseInt(state[0][settings.index].wind.speed * 3.6) +
                    ` km/h`
                  } `
                : `${
                    Number.parseInt(
                      state[0][settings.index].wind.speed * 2.24
                    ) + ` mph`
                  }`}
            </p>
          </div>
        </div>
        <div>
          <h3>{settings.city}</h3>
          <h4>{state[0][settings.index].weather[0].description}</h4>
          <h4>
            {days[new Date(state[0][settings.index].dt * 1000).getDay()]},{" "}
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
