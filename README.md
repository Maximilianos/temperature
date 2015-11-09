# temperature

A collection of simple temperature operations for javascript.

The collection includes functions to convert between Celsius, Fahrenheit and Kelvin temperatures.

## Install

Via [npm](https://www.npmjs.com/package/temperature)

```
npm i temperature
```

## Usage

```javascript
// import only the functions you need
import {celsiusToFahrenheit} from 'temperature';

const celsius = 100;
const fahrenheit = celsiusToFahrenheit(celsius); // == 212 

// ... do stuff with awesome temperatures!
```

## Available converters

All the following methods take input of type `number` and
return output of type `number`

- **celsiusToFahrenheit(celsius)**
- **celsiusToKelvin(celsius)**
- **fahrenheitToCelsius(fahrenheit)**
- **fahrenheitToKelvin(fahrenheit)**
- **kelvinToCelsius(kelvin)**
- **kelvinToFahrenheit(kelvin)**

## License

MIT &copy; [Max GJ Panas](maxpanas.com)
