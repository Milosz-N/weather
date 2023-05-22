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

