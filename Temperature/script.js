function convertToCelsius() {
    var celsiusInput = document.getElementById("celsius").value;
    var fahrenheitResult = (celsiusInput * 9 / 5) + 32;
    var kelvinResult = parseFloat(celsiusInput) + 273.15;
    document.getElementById("result").innerHTML =
        celsiusInput + " Celsius is " + fahrenheitResult.toFixed(2) + " Fahrenheit and " + kelvinResult.toFixed(2) + " Kelvin.";
}

function convertToFahrenheit() {
    var fahrenheitInput = document.getElementById("fahrenheit").value;
    var celsiusResult = (fahrenheitInput - 32) * 5 / 9;
    var kelvinResult = (parseFloat(fahrenheitInput) + 459.67) * 5 / 9;
    document.getElementById("result").innerHTML =
        fahrenheitInput + " Fahrenheit is " + celsiusResult.toFixed(2) + " Celsius and " + kelvinResult.toFixed(2) + " Kelvin.";
}