function convertTemperature() {
  var temperature = parseFloat(document.getElementById("temperature").value);
  var fromUnit = document.getElementById("fromUnit").value;
  var toUnit = document.getElementById("toUnit").value;
  var resultDiv = document.getElementById("result");
  var calculationDiv = document.getElementById("calculation");
  var result;
  var calculationText = "";

  if (isNaN(temperature)) {
    resultDiv.innerHTML = "Masukkan suhu yang valid.";
    calculationDiv.innerHTML = "";
    return;
  }

  if (fromUnit === toUnit) {
    result = temperature;
    calculationText = "Tidak ada konversi yang dilakukan.";
  } else if (fromUnit === "celcius") {
    if (toUnit === "fahrenheit") {
      result = (temperature * 9) / 5 + 32;
      calculationText =
        "(" + temperature + "°C × 9/5) + 32 = " + result.toFixed(2) + "°F";
    } else if (toUnit === "kelvin") {
      result = temperature + 273.15;
      calculationText =
        temperature + "°C + 273.15 = " + result.toFixed(2) + "K";
    } else if (toUnit === "reamur") {
      result = (temperature * 4) / 5;
      calculationText = temperature + "°C × 4/5 = " + result.toFixed(2) + "°Re";
    } else if (toUnit === "rankine") {
      result = ((temperature + 273.15) * 9) / 5;
      calculationText =
        "(" + temperature + "°C + 273.15) × 9/5 = " + result.toFixed(2) + "°R";
    }
  } else if (fromUnit === "fahrenheit") {
    if (toUnit === "celcius") {
      result = ((temperature - 32) * 5) / 9;
      calculationText =
        "(" + temperature + "°F - 32) × 5/9 = " + result.toFixed(2) + "°C";
    } else if (toUnit === "kelvin") {
      result = ((temperature - 32) * 5) / 9 + 273.15;
      calculationText =
        "(" +
        temperature +
        "°F - 32) × 5/9 + 273.15 = " +
        result.toFixed(2) +
        "K";
    } else if (toUnit === "reamur") {
      result = ((temperature - 32) * 4) / 9;
      calculationText =
        "(" + temperature + "°F - 32) × 4/9 = " + result.toFixed(2) + "°Re";
    } else if (toUnit === "rankine") {
      result = temperature + 459.67;
      calculationText =
        temperature + "°F + 459.67 = " + result.toFixed(2) + "°R";
    }
  } else if (fromUnit === "kelvin") {
    if (toUnit === "celcius") {
      result = temperature - 273.15;
      calculationText =
        temperature + "K - 273.15 = " + result.toFixed(2) + "°C";
    } else if (toUnit === "fahrenheit") {
      result = ((temperature - 273.15) * 9) / 5 + 32;
      calculationText =
        "(" +
        temperature +
        "K - 273.15) × 9/5 + 32 = " +
        result.toFixed(2) +
        "°F";
    } else if (toUnit === "reamur") {
      result = ((temperature - 273.15) * 4) / 5;
      calculationText =
        "(" + temperature + "K - 273.15) × 4/5 = " + result.toFixed(2) + "°Re";
    } else if (toUnit === "rankine") {
      result = (temperature * 9) / 5;
      calculationText = temperature + "K × 9/5 = " + result.toFixed(2) + "°R";
    }
  } else if (fromUnit === "reamur") {
    if (toUnit === "celcius") {
      result = (temperature * 5) / 4;
      calculationText = temperature + "°Re × 5/4 = " + result.toFixed(2) + "°C";
    } else if (toUnit === "fahrenheit") {
      result = (temperature * 9) / 4 + 32;
      calculationText =
        "(" + temperature + "°Re × 9/4) + 32 = " + result.toFixed(2) + "°F";
    } else if (toUnit === "kelvin") {
      result = (temperature * 5) / 4 + 273.15;
      calculationText =
        "(" + temperature + "°Re × 5/4) + 273.15 = " + result.toFixed(2) + "K";
    } else if (toUnit === "rankine") {
      result = (temperature * 9) / 4 + 491.67;
      calculationText =
        "(" + temperature + "°Re × 9/4) + 491.67 = " + result.toFixed(2) + "°R";
    }
  } else if (fromUnit === "rankine") {
    if (toUnit === "celcius") {
      result = ((temperature - 491.67) * 5) / 9;
      calculationText =
        "(" + temperature + "°R - 491.67) × 5/9 = " + result.toFixed(2) + "°C";
    } else if (toUnit === "fahrenheit") {
      result = temperature - 459.67;
      calculationText =
        temperature + "°R - 459.67 = " + result.toFixed(2) + "°F";
    } else if (toUnit === "kelvin") {
      result = (temperature * 5) / 9;
      calculationText = temperature + "°R × 5/9 = " + result.toFixed(2) + "K";
    } else if (toUnit === "reamur") {
      result = ((temperature - 491.67) * 4) / 9;
      calculationText =
        "(" + temperature + "°R - 491.67) × 4/9 = " + result.toFixed(2) + "°Re";
    }
  }

  resultDiv.innerHTML = "Hasil: " + result.toFixed(2) + " " + toUnit;
  calculationDiv.innerHTML = "Perhitungan: " + calculationText;
}
