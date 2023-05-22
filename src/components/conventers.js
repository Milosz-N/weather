export const tempConv = (temp, unit) => {
  if (unit == 0) {
    return Number.parseInt(temp - 273.15);
  } else {
    return Number.parseInt((temp - 273.15) * 1.8 + 32);
  }
};

export const windConv = (wind, unit) => {
  if (unit == 0) {
    return Number.parseInt(wind * 3.6) + `km/h`;
  } else {
    return Number.parseInt(wind * 2.24) + `mph`;
  }
};

export const getDay = (day, timezone) => {
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return days[new Date((day + Number.parseInt(timezone)) * 1000).getDay()];
};

export const checkresult = (x) => {
  const cards = document.querySelectorAll(`.game`);
  const nodes = Array.prototype.slice.call(cards, 0);

  const activeCard = document.querySelectorAll(`.active`);
  const nodesCard = Array.prototype.slice.call(activeCard, 0);
  for (Element of nodesCard) {
    Element.classList.remove("active");
  }
  return nodes.every((x) => x.id == x.name);
};
export const newGame = (setGame) => {
  if (window.confirm("Press OK to start new game")) {
    setGame((prevState) => ({
      ...prevState,
      start: false,
      finish: false,
      pause: false,
      image: 0,
      board: [],
      time: 0,
    }));
  }
};

function animate(arr) {
  const firstX = arr[0].name.charAt(0); //x
  const firstY = arr[0].name.charAt(2); //y
  const secondX = arr[1].name.charAt(0); //x
  const secondY = arr[1].name.charAt(2); //y
  const duration =
    Math.pow(
      Math.pow(
        Math.abs(Number.parseInt(firstX) - Number.parseInt(secondX)),
        2
      ) +
        Math.pow(
          Math.abs(Number.parseInt(firstY) - Number.parseInt(secondY)),
          2
        ),
      1 / 2
    ) * 100;
  arr[0].animate(
    [
      {
        transform: `${`translate(${
          (Number.parseInt(secondX) - Number.parseInt(firstX)) * 256
        }px, ${
          (Number.parseInt(secondY) - Number.parseInt(firstY)) * 144
        }px)`}  `,
      },

      { transform: "translate(0)" },
    ],
    {
      duration: duration,

      iterations: 1,
    }
  );
  arr[1].animate(
    [
      {
        transform: `${`translate(${
          (Number.parseInt(firstX) - Number.parseInt(secondX)) * 256
        }px, ${
          (Number.parseInt(firstY) - Number.parseInt(secondY)) * 144
        }px)`}  `,
      },

      { transform: "translate(0)" },
    ],
    {
      duration: duration,

      iterations: 1,
    }
  );
}
