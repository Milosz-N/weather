import "../components/scss/plot.scss";
import "../components/scss/main.scss";
import React, { useEffect, useState } from "react";
import { tempConv, windConv } from "./conventers";
function ButtonTest({ index, state, settings }) {
  const [min, setMin] = useState(0);

  useEffect(() => {
    if (Math.min(tempConv, 0) < 0) {
      setMin(
        Number.parseInt(Math.min(...state[0].map((o) => tempConv(o, 0))) - 1) *
          -1
      );
    } else {
      setMin(0);
    }
  }, [settings.city]);

  return (
    <>
      <h4 className="aaa">
        {new Date(
          (state[0][index].dt + Number.parseInt(settings.timezone)) * 1000
        ).getHours()}
        :00
      </h4>
      {settings.plotindex < 2 ? (
        <>
          <div
            className="buttonHour"
            style={{
              height:
                settings.plotindex == 0
                  ? Number.parseInt(
                      ((tempConv(state[0][index].main.temp, 0) + min) /
                        Math.max(
                          ...state[0].map((o) => tempConv(o.main.temp, 0) + min)
                        )) *
                        80
                    ) +
                    1 +
                    `%`
                  : Number.parseInt(state[0][index].pop * 100 + 5 + `%`),
              background: `${settings.plotindex == 0 ? "yellow" : "blue"}`,
            }}
          ></div>
          <>
            <h4 className={`${settings.plotindex == 0 ? "aaa" : "pop"}`}>
              {settings.plotindex == 0
                ? tempConv(state[0][index].main.temp, settings.unit)
                : Number.parseInt(state[0][index].pop * 100) + "%"}
            </h4>
          </>
        </>
      ) : (
        <>
          <img
            src={require("../components/icons/arrow.svg").default}
            style={{
              rotate: `${state[0][index].wind.deg}` + `deg`,
              transform: `scale(${
                state[0][index].wind.speed /
                  Math.max(...state[0].map((o) => o.wind.speed)) +
                0.12
              })`,
            }}
          />
          <h4 className="wind">
            {" "}
            {windConv(state[0][index].wind.speed, settings.unit)}
          </h4>
        </>
      )}
    </>
  );
}

export default ButtonTest;
