function displayTemperature(response) {
    console.log(response.data)
    let temperatureElement = document.querySelector("#temperature")
    let cityElement = document.querySelector("#city")
    let descriptionElement = document.querySelector("#description")
    temperatureElement.innerHTML = Math.round(response.data.main.temp);
    cityElement.innerHTML = response.data.name
    descriptionElement.innerHTML = response.data.weather[0].description;
}
   



let apiKey = "34f1c513b53f57aa71f2dd7697c02049"
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Gent&appid=${apiKey}&units=metric`

    axios.get(apiUrl).then(displayTemperature);