import React, { useState, useRef, useReducer, useTransition } from "react";
import FirstColumn from "./FirstColumn";
import NextdayBtn from "./NextdayBtn.js";
import "./scss/main.scss";
import "./scss/input.scss";
import Plot from "./Plot";
import Spinner from "./Spinner";
function Home() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "add": {
        return [...state, action.data];
      }

      case "remove": {
        return state.slice(0, -1);
      }
      case "error": {
        console.log(state);
      }

      default:
        return state;
    }
  };
  const [isPending, startTransition] = useTransition();
  const [state, dispatch] = useReducer(reducer, []);
  const [error, setError] = useReducer(reducer, []);
  const [settings, setSettings] = useState({
    city: "",
    index: 0,
    nextday: 0,
    plotindex: 0,
    unit: 0,
    timezone: 0,
    dayBtn: 0,
    indexBtn: 0,
  });
  const cityRef = useRef();
  console.log(state);
  function onSubmit(e) {
    setSettings({
      ...settings,
      city: "",
      index: 0,
      nextday: 0,
      plotindex: 0,
      unit: 0,
      timezone: 0,
      dayBtn: 0,
      cod: 0,
      indexBtn: 0,
      dayBtn: 0,
    });
    dispatch({ type: "error" });
    setError({ type: "remove" });
    e.preventDefault();
    if (!cityRef.current.value.length == 0) {
      startTransition(() => {
        fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${cityRef.current.value}&lang=en&appid=e2acebbebc03ce4dd555558a86b812b3`
        )
          .then((response) => response.json())
          .then((response) => {
            if (response.cod == 200) {
              console.log(response);
              dispatch({ type: "add", data: response.list });

              for (let x = 0; x < 9; ++x) {
                if (
                  new Date(
                    (response.list[0].dt + response.city.timezone) * 1000
                  ).getDate() !==
                  new Date(
                    (response.list[x].dt + response.city.timezone) * 1000
                  ).getDate()
                ) {
                  setSettings({
                    ...settings,
                    nextday: x,
                    city: `${
                      response.city.name + ", " + response.city.country
                    }`,
                    timezone: `${response.city.timezone}`,
                    cod: response.cod,
                    indexBtn: 0,
                    index: 0,
                  });
                  break;
                }
              }
            } else {
              setError({ type: "add", data: response });
            }
          });
      });
    }
  }
  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <input type="text" ref={cityRef}></input>
        <button type="submit">
          <img
            src={require("../components/icons/search.svg").default}
            key="search"
          />
        </button>
        <button>
          <img
            src={require("../components/icons/x.svg").default}
            onClick={() => {
              cityRef.current.value = "";
            }}
          />
        </button>
      </form>

      <>
        {isPending ? (
          <>
            <Spinner />
          </>
        ) : (
          <>
            {" "}
            {settings.cod == 200 && (
              <>
                <FirstColumn
                  state={state}
                  settings={settings}
                  setSettings={setSettings}
                />
                <Plot
                  state={state}
                  settings={settings}
                  setSettings={setSettings}
                />
                <NextdayBtn
                  state={state}
                  settings={settings}
                  setSettings={setSettings}
                />
              </>
            )}
          </>
        )}
      </>

      {error.length > 0 && (
        <h2 className="error">
          {error[0].cod}, {error[0].message}
        </h2>
      )}
    </div>
  );
}

export default Home;
