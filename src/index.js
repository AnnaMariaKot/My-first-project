function displayTemperature(response) {
    console.log(response.data.main.temp)
}


let apiKey = "34f1c513b53f57aa71f2dd7697c02049"
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Gent&appid=${apiKey}&units=metric`

axios.get(apiUrl).then(displayTemperature)