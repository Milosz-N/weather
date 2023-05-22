import React, { useState } from "react";
import Icon from "./Icon";
import { getDay, tempConv } from "./conventers";
function NextdayBtn({ state, settings, setSettings }) {
  const [background, setBackground] = useState(0);
  let arrNextDayBtn = [];
// console.log( state[0].slice(0, 3).map(function (element) {
//   return(element.weather[0].id)
// }).reduce(
//   (a,b,i,arr)=>
//    (arr.filter(v=>v===a).length>=arr.filter(v=>v===b).length?a:b),
//   null))

  if (settings.nextday) {
    for (let x = 0; x < 5; x++) {
      arrNextDayBtn.push(
        React.createElement(
          "div",
          {
            key: x,
            className: `${background == x ? "plot-nextday bcg" : "plot-nextday"}`,
            onClick: () => {
              if (x == 0) {
                setSettings({
                  ...settings,
                  index: 0,
                  dayBtn: 0,
                  indexBtn: 0,
                });
                setBackground(0);
              } else {
                setSettings({
                  ...settings,
                  index: settings.nextday + (x - 1) * 8,
                  dayBtn: x,
                  indexBtn: settings.nextday + (x - 1) * 8,
                });
                setBackground(x);
              }
            },
          },
          [
            React.createElement(
              "h4",
              {
                className: "wind",
                key: x,
              },
              getDay(state[0][x * 8].dt, settings.timezone)
            ),
            React.createElement(Icon, {
              a:
             state[0].slice((x == 0 ? 0 : settings.nextday + 8 * (x - 1) + 1, x == 0 ? settings.nextday : settings.nextday + 8 *x))
             .map(function (element) {
                  return(element.weather[0].id)
                })
              .reduce(
                (a,b,i,arr)=>
                  (arr.filter(v=>v===a).length>=arr.filter(v=>v===b).length?a:b),
                  null),
               key: x + 5,
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
                  state[0]
                    .map(function (element) {
                      return element.main.temp;
                    })
                    .slice(
                      `${x == 0 ? 0 : settings.nextday + 8 * (x - 1)}`,
                      `${x == 0 ? settings.nextday : settings.nextday + 8 * x}`
                    )
                    .map(function (element) {
                      return tempConv(element, settings.unit);
                    })
                    .reduce((a, b) => Math.max(a, b)) + `°`
                ),
                React.createElement(
                  "h4",

                  {
                    className: "pMaxmin",
                    key: x + 105,
                  },
                  state[0]
                    .map(function (element) {
                      return element.main.temp;
                    })
                    .slice(
                      `${x == 0 ? 0 : settings.nextday + 8 * (x - 1)}`,
                      `${x == 0 ? settings.nextday : settings.nextday + 8 * x}`
                    )
                    .map(function (element) {
                      return tempConv(element, settings.unit);
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
