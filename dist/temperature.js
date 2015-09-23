(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.temperature = mod.exports;
  }
})(this, function (exports) {
  /**
   * Convert Celsius to Fahrenheit
   *
   * @param celsius number
   * @returns {number}
   */
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.celsiusToFahrenheit = celsiusToFahrenheit;
  exports.celsiusToKelvin = celsiusToKelvin;
  exports.fahrenheitToCelsius = fahrenheitToCelsius;
  exports.fahrenheitToKelvin = fahrenheitToKelvin;
  exports.kelvinToCelsius = kelvinToCelsius;
  exports.kelvinToFahrenheit = kelvinToFahrenheit;

  function celsiusToFahrenheit(celsius) {
    return celsius * 9 / 5 + 32;
  }

  /**
   * Convert Celsius to Kelvin
   *
   * @param celsius number
   * @returns {*}
   */

  function celsiusToKelvin(celsius) {
    return celsius + 273.15;
  }

  /**
   * Convert Fahrenheit to Celsius
   *
   * @param fahrenheit number
   * @returns {number}
   */

  function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
  }

  /**
   * Convert Fahrenheit to Kelvin
   *
   * @param fahrenheit number
   * @returns {number}
   */

  function fahrenheitToKelvin(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9 + 273.15;
  }

  /**
   * Convert Kelvin to Celsius
   *
   * @param kelvin number
   * @returns {number}
   */

  function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
  }

  /**
   * Convert Kelvin to Fahrenheit
   *
   * @param kelvin number
   * @returns {number}
   */

  function kelvinToFahrenheit(kelvin) {
    return (kelvin - 273.15) * 9 / 5 + 32;
  }
});