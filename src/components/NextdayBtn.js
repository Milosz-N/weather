import React, { useState } from "react";
import Icon from "./Icon";
function NextdayBtn({ state, settings, setSettings }) {
  const [bcg, setBcg] = useState(0);
  let arrNextDayBtn = [];
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  if (settings.nextday) {
    for (let x = 0; x < 5; x++) {
      arrNextDayBtn.push(
        React.createElement(
          "div",
          {
            key: x,
            className: `${bcg == x ? "plot-nextday bcg" : "plot-nextday"}`,
            onClick: () => {
              if (x == 0) {
                setSettings({
                  ...settings,
                  index: 0,
                  dayBtn: 0,
                  indexBtn: 0,
                });
                setBcg(0);
              } else {
                setSettings({
                  ...settings,
                  index: settings.nextday + (x - 1) * 8,
                  dayBtn: x,
                  indexBtn: settings.nextday + (x - 1) * 8,
                });
                setBcg(x);
              }
            },
          },
          [
            React.createElement(
              "h4",
              {
                className: "wind",
                key: x
                 
              },
              days[
                x == 0
                  ? new Date(
                      (state[0][0].dt + Number.parseInt(settings.timezone)) *
                        1000
                    ).getDay()
                  : new Date(
                      (state[0][x * 8].dt + Number.parseInt(settings.nextday)) *
                        1000
                    ).getDay()
              ]
            ),
            React.createElement(Icon, {
              a:
                x == 0
                  ? state[0]
                      .slice(0, settings.nextday)
                      .reduce(
                        (partialSum, a) => partialSum + a.weather[0].id,
                        0
                      ) / settings.nextday
                  : state[0]
                      .slice(
                        settings.nextday + 8 * (x - 1),
                        settings.nextday + 8 * x
                      )
                      .reduce(
                        (partialSum, a) => partialSum + a.weather[0].id,
                        0
                      ) / settings.nextday,

              key: x + 5
            }),
            React.createElement(
              "div",
              {
                className: "flex",
                key: x + 50,
              },
              [
                React.createElement(
                  "h4",
                  {
                    className: "pMaxmin bold",
                    key: x + 100,
                  },
                  x == 0
                    ? state[0]
                        .map(function (element) {
                          return element.main.temp - 273.15;
                        })
                        .slice(0, settings.nextday)
                        .map(function (element) {
                          if (settings.unit == 0) {
                            return Number.parseInt(element);
                          } else {
                            return Number.parseInt(element * 1.8 + 32);
                          }
                        })
                        .reduce((a, b) => Math.max(a, b)) + `°`
                    : state[0]
                        .map(function (element) {
                          return element.main.temp - 273.15;
                        })
                        .slice(
                          settings.nextday + 8 * (x - 1),
                          settings.nextday + 8 * x
                        )
                        .map(function (element) {
                          if (settings.unit == 0) {
                            return Number.parseInt(element);
                          } else {
                            return Number.parseInt(element * 1.8 + 32);
                          }
                        })
                        .reduce((a, b) => Math.max(a, b)) + `°`
                ),
                React.createElement(
                  "h4",

                  {
                    className: "pMaxmin",
                    key: x + 105,
                  },

                  x == 0
                    ? state[0]
                        .map(function (element) {
                          return element.main.temp - 273.15;
                        })
                        .map(function (element) {
                          if (settings.unit == 0) {
                            return Number.parseInt(element);
                          } else {
                            return Number.parseInt(element * 1.8 + 32);
                          }
                        })
                        .reduce((a, b) => Math.min(a, b)) + `°`
                    : state[0]
                        .map(function (element) {
                          return element.main.temp - 273.15;
                        })
                        .slice(
                          settings.nextday + 8 * (x - 1),
                          settings.nextday + 8 * x
                        )
                        .map(function (element) {
                          if (settings.unit == 0) {
                            return Number.parseInt(element);
                          } else {
                            return Number.parseInt(element * 1.8 + 32);
                          }
                        })
                        .reduce((a, b) => Math.min(a, b)) + `°`
                ),
              ]
            ),
          ]
        )
      );
    }
  }
  return (
    <div className="left" id="dayBtn">
      {arrNextDayBtn}
    </div>
  );
}

export default NextdayBtn;
