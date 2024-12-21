function tocelcius(k) {
  return parseInt((k - 273.15) * 100) / 100;
}

function tokmph(mps) {
  return parseInt(mps * 3.6 * 100) / 100;
}

function getWindDirection(deg) {
    const directions = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", 
                        "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
    const index = Math.round(deg / 22.5) % 16;
    return `${directions[index]} (${deg}°)`;
}

module.exports = { tocelcius, tokmph, getWindDirection };
