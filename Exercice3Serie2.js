const temperature = prompt("Indiquez une température en celsius");
const temperatureKelvin = 273.15;

const degre = Number (temperature) + temperatureKelvin;

console.log(`La température de ${temperature}°Celsius vaut ${degre} en Kelvin`);
