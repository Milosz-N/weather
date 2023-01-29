import React from "react";

function Icon({ a }) {
  switch (true) {
    case a >= 200 && a <= 250:
      return (
        <div className="sunCloud">
          <img
            src={require("../components/icons/sun.svg").default}
            // key="sun"
            className="image-icon sun"
            //ok
          />
          <img
            src={require("../components/icons/cloud.svg").default}
            className="image-icon cloud"
          />

          <img
            src={require("../components/icons/drop.svg").default}
            className="image-icon drop"
            style={{ left: "65px", animationDuration: `${Math.random() * 3}s` }}
          />
          <img
            src={require("../components/icons/drop.svg").default}
            className="image-icon drop"
            style={{ left: "46px", animationDuration: `${Math.random() * 3}s` }}
          />
        </div>
      );
      break;
    case a >= 300 && a < 351:
      return (
        <div
          className="iconContainer"
          //ok
        >
          <img
            src={require("../components/icons/rain_heavy.svg").default}
            className="image-icon rainHeavy"
          />
          <img
            src={require("../components/icons/drizzle.svg").default}
            className="image-icon drizzle"
            style={{ left: "45px", animationDuration: `${Math.random() * 3}s` }}
          />
          <img
            src={require("../components/icons/drizzle.svg").default}
            className="image-icon drizzle"
            style={{ left: "30px", animationDuration: `${Math.random() * 3}s` }}
          />
          <img
            src={require("../components/icons/drizzle.svg").default}
            className="image-icon drizzle"
            style={{ left: "10px", animationDuration: `${Math.random() * 3}s` }}
          />
          <img
            src={require("../components/icons/drizzle.svg").default}
            className="image-icon drizzle"
            style={{ left: "1px", animationDuration: `${Math.random() * 3}s` }}
          />
          <img
            src={require("../components/icons/drizzle.svg").default}
            className="image-icon drizzle"
            style={{
              left: "-10px",
              animationDuration: `${Math.random() * 3}s`,
            }}
          />
          <img
            src={require("../components/icons/drizzle.svg").default}
            className="image-icon drizzle"
            style={{
              left: "-20px",
              animationDuration: `${Math.random() * 3}s`,
            }}
          />
        </div>
      );
      break;
    case a >= 500 && a < 551:
      return (
        <div className="iconContainer">
          <img
            src={require("../components/icons/drop.svg").default}
            className="image-icon drop"
            style={{ left: "7px", animationDuration: `${Math.random() * 3}s` }}
            //ok
          />
          <img
            src={require("../components/icons/drop.svg").default}
            className="image-icon drop"
            style={{ left: "25px", animationDuration: `${Math.random() * 3}s` }}
          />
          <img
            src={require("../components/icons/drop.svg").default}
            className="image-icon drop"
            style={{ left: "40px", animationDuration: `${Math.random() * 3}s` }}
          />
          <img
            src={require("../components/icons/drop.svg").default}
            className="image-icon drop"
            style={{ left: "55px", animationDuration: `${Math.random() * 3}s` }}
          />
          <img
            src={require("../components/icons/drop.svg").default}
            className="image-icon drop"
            style={{ left: "65px", animationDuration: `${Math.random() * 3}s` }}
          />
          <img
            src={require("../components/icons/rain_heavy.svg").default}
            className="image-icon rainHeavy"
          />
        </div>
      );
      break;
    case (a) => 600 && a < 651:
      {
        return (
          <div className="iconContainer">
            <img
              src={require("../components/icons/snow.svg").default}
              // key="snow"
              className="image-icon snow"
              style={{ bottom: "15px", left: "10px" }}
            />
            <img
              src={require("../components/icons/snow.svg").default}
              // key="snow"
              className="image-icon snow"
              style={{ bottom: "15px", left: "25px" }}
            />
            <img
              src={require("../components/icons/snow.svg").default}
              // key="snow"
              className="image-icon snow"
              style={{ bottom: "15px", left: "40px" }}
            />
            <img
              src={require("../components/icons/snow.svg").default}
              // key="snow"
              className="image-icon snow"
              style={{ bottom: "15px", left: "55px" }}
            />
            <img
              src={require("../components/icons/sun.svg").default}
              // key="sun"
              className="image-icon sun"
              style={{ left: "-20px" }}
            />
            <img
              src={require("../components/icons/cloud.svg").default}
              className="image-icon cloud"
            />
          </div>
        );
      }
      break;
    case a > 700 && a < 782:
      return (
        <div className="iconContainer">
          <img
            src={require("../components/icons/rain_heavy.svg").default}
            className="image-icon rainHeavy"
          />
          <img
            src={require("../components/icons/haze.svg").default}
            // key="haze"
            className="image-icon haze"
            style={{
              top: "55px",
              animationDuration: `${Math.random() * 7 + 4}s`,
            }}
          />
          <img
            src={require("../components/icons/haze.svg").default}
            // key="haze"
            className="image-icon haze"
            style={{
              top: "70px",
              animationDuration: `${Math.random() * 7 + 4}s`,
            }}
          />
          <img
            src={require("../components/icons/haze.svg").default}
            // key="haze"
            className="image-icon haze"
            style={{
              top: "85px",
              animationDuration: `${Math.random() * 7 + 4}s`,
            }}
          />
        </div>
      );
      break;

    case a == 800:
      {
        return (
          <div className="iconContainer">
            <img
              src={require("../components/icons/sun.svg").default}
              // key="sun"
              className="image-icon sun"
              style={{ right: "15px" }}
            />
          </div>
        );
      }
      break;
    case a == 801:
      {
        return (
          <div className="iconContainer">
            <img
              src={require("../components/icons/cloud.svg").default}
              className="image-icon cloud"
              style={{ top: "15px", left: "25px" }}
            />
            <img
              src={require("../components/icons/sun.svg").default}
              //  key="sun"
              className="image-icon sun"
              style={{ left: "-5px" }}
            />
          </div>
        );
      }
      break;
    case a == 802:
      {
        return (
          <div className="iconContainer">
            <img
              src={require("../components/icons/rain_heavy.svg").default}
              className="image-icon cloud"
              style={{ top: "15px", left: "25px", fill: "red" }}
            />
            <img
              src={require("../components/icons/sun.svg").default}
              // key="sun"
              className="image-icon sun"
              style={{ left: "-5px" }}
            />
          </div>
        );
      }
      break;
    case a == 803:
      {
        return (
          <div className="iconContainer">
            <img
              src={require("../components/icons/sun.svg").default}
              // key="sun"
              className="image-icon sun"
              style={{ left: "-5px" }}
            />
            <img
              src={require("../components/icons/cloud.svg").default}
              className="image-icon cloud"
              style={{ top: "15px", left: "25px", fill: "red" }}
            />
          </div>
        );
      }
      break;
    case a == 804:
      {
        return (
          <div className="iconContainer">
            <img
              src={require("../components/icons/sun.svg").default}
              // key="sun"
              className="image-icon sun"
              style={{ left: "-5px" }}
            />
            <img
              src={require("../components/icons/rain_heavy.svg").default}
              className="image-icon cloud"
              style={{ top: "15px", left: "25px" }}
            />
          </div>
        );
      }
      break;

    default:
      return (
        <div className="iconContainer">
          <img
            src={require("../components/icons/sun.svg").default}
            // key="sun"
            className="image-icon "
            style={{ right: "15px" }}
          />
        </div>
      );
  }
}

export default Icon;
