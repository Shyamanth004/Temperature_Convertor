function convert() {
    const temperatureInput = document.getElementById('temperature');
    const unitSelect = document.getElementById('unit');
    const resultDiv = document.getElementById('result');
    const temperature = parseFloat(temperatureInput.value);
    const selectedUnit = unitSelect.value;
    if (selectedUnit === 'Fahrenheit')
    {
        const celsius = (temperature - 32) * (5 / 9);
        resultDiv.textContent = `Converted temperature: ${celsius.toFixed(2)} °C`;
    }
    else if (selectedUnit === 'Celsius')
    {
        const fahrenheit = (temperature * 9 / 5) + 32;
        resultDiv.textContent = `Converted temperature: ${fahrenheit.toFixed(2)} °F`;
    }
}