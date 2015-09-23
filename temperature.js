/**
 * Convert Celsius to Fahrenheit
 *
 * @param celsius number
 * @returns {number}
 */
export function celsiusToFahrenheit(celsius) {
	return (celsius * 9 / 5) + 32;
}


/**
 * Convert Celsius to Kelvin
 *
 * @param celsius number
 * @returns {*}
 */
export function celsiusToKelvin(celsius) {
	return celsius + 273.15;
}


/**
 * Convert Fahrenheit to Celsius
 *
 * @param fahrenheit number
 * @returns {number}
 */
export function fahrenheitToCelsius(fahrenheit) {
	return (fahrenheit - 32) * 5 / 9;
}


/**
 * Convert Fahrenheit to Kelvin
 *
 * @param fahrenheit number
 * @returns {number}
 */
export function fahrenheitToKelvin(fahrenheit) {
	return (fahrenheit - 32) * 5 / 9 + 273.15;
}


/**
 * Convert Kelvin to Celsius
 *
 * @param kelvin number
 * @returns {number}
 */
export function kelvinToCelsius(kelvin) {
	return kelvin - 273.15;
}


/**
 * Convert Kelvin to Fahrenheit
 *
 * @param kelvin number
 * @returns {number}
 */
export function kelvinToFahrenheit(kelvin) {
	return (kelvin - 273.15) * 9 / 5 + 32;
}
