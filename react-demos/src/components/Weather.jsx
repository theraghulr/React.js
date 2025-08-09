import React from 'react';

const Weather = () => {
  const temperature = 19;
  let message;

  if (temperature <= 15) {
    message = "It's cold outside";
  } else if (temperature < 25) {
    message = "It's nice outside";
  } else {
    message = "It's hot outside";
  }

  return <h2>{message}</h2>;
};

export default Weather;
