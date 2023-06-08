//your JS code here. If required.
function toFahrenheit(celsius) {
  if (celsius < -273.15 || celsius > 1.8e9) {
    throw new Error('Temperature value is out of range');
  }

  const fahrenheit = (celsius * 9 / 5) + 32;
  return fahrenheit.toFixed(2);
}