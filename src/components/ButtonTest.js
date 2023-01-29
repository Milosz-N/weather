import "../components/scss/plot.scss";
import "../components/scss/main.scss";
import React, { useEffect, useState } from "react";
function ButtonTest({ index, state, settings }) {
  const [min, setMin] = useState(0);

  useEffect(() => {
          if (Math.min(...state[0].map((o) => o.main.temp - 273.15)) < 0) {
            setMin(
              Number.parseInt(
                Math.min(...state[0].map((o) => o.main.temp - 273.15)) - 1
              ) * -1
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
            style={
              Number.parseInt(settings.plotindex) == 0
                ? {
                    height:
                      Number.parseInt(
                        ((state[0][index].main.temp - 273.15 + min) /
                          Math.max(
                            ...state[0].map((o) => o.main.temp - 273.15 + min)
                          )) *
                          80
                      ) +
                      1 +
                      `%`,
                    background: "yellow",
                  }
                : {
                    height: Number.parseInt(
                      state[0][index].pop * 100 + 5 + `%`
                    ),
                    background: "blue",
                  }
            }
          ></div>

          {settings.plotindex == 0 ? (
            <>
              <h4 className="aaa">
                {Number.parseInt(settings.unit) == 0
                  ? `${Number.parseInt(state[0][index].main.temp - 273.15)}`
                  : `${Number.parseInt(
                      (state[0][index].main.temp - 273.15) * 1.8 + 32
                    )}`}
              </h4>
            </>
          ) : (
            <h4 className="pop">
              {" "}
              {Number.parseInt(state[0][index].pop * 100) + "%"}
            </h4>
          )}
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
            {settings.unit == 0
              ? `${Number.parseInt(state[0][index].wind.speed * 3.6) + `km/h`}`
              : `${
                  Number.parseInt(state[0][index].wind.speed * 2.24) + `mph`
                } `}
          </h4>
        </>
      )}
    </>
  );
}

export default ButtonTest;
