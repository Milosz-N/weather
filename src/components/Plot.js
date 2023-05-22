import React from "react";
import ButtonTest from "./ButtonTest.js";
function Plot({ state, settings, setSettings }) {
  let arrButtons = [];
  for (let x = 0; x < 8; x++) {
    arrButtons.push(
      React.createElement(
        "div",
        {
          onClick: () => {
            setSettings({
              ...settings,
              index: `${
                Number.parseInt(settings.indexBtn === 0)
                  ? x
                  : x + Number.parseInt(settings.indexBtn)
              }`,
            });
          },
          className: `${"div-plot"}`,
          key: x,
        },

        [
          React.createElement(ButtonTest, {
            index: `${
              Number.parseInt(settings.indexBtn === 0)
                ? x
                : x + Number.parseInt(settings.indexBtn)
            }`,
            state: state,
            settings: settings,
            key: x,
          }),
        ]
      )
    );
  }

  return (
    <>
      <div className="left flex">
        <button
          className={` ${settings.plotindex == 0 && "border"}`}
          onClick={() => {
            setSettings({
              ...settings,
              plotindex: 0,
            });
          }}
        >
          Temperature
        </button>
        <button
          className={` ${settings.plotindex == 1 && "border"}`}
          onClick={() => {
            setSettings({
              ...settings,
              plotindex: 1,
            });
          }}
        >
          Chance of precipitation
        </button>
        <button
          className={` ${settings.plotindex == 2 && " border"}`}
          onClick={() => {
            setSettings({
              ...settings,
              plotindex: 2,
            });
          }}
        >
          Wind
        </button>
      </div>
      <div className="flex">{arrButtons}</div>
    </>
  );
}

export default Plot;
