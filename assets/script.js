var searchHistory = document.querySelector(".searchHistory");
var searchIcon = document.querySelector(".search-icon");
var inputBox = document.querySelector(".searchInput");
var currentWeatherBox = document.querySelector(".currentWeather");

var userHistory = [];

function renderWeather() {
    searchHistory.innerHTML = "";
    var cityValue = inputBox.value;
    userHistory.push(cityValue);
    currentWeatherBox.innerHTML="";
    
    for (var i=0; i < userHistory.length; i++) {
        var historyBlock = document.createElement("div");
        historyBlock.setAttribute("class", "historyBlock");
        historyBlock.innerHTML = userHistory[i];
        searchHistory.prepend(historyBlock);
    }

    var weatherURL = "https://api.openweathermap.org/data/2.5/weather?q="+ inputBox.value + "&appid=8f851cd1ee25a4bb8996f7bb698edf09";

    $.ajax({
        url: weatherURL,
        method: "GET"
    }).then(function(response) {
        var cityName = document.createElement("h1");
        var weatherIcon = document.createElement("img");
        var weatherIconHTML = "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png";
        var temp = document.createElement("p");
        var humidity = document.createElement("p");
        var wind = document.createElement("p");


        cityName.innerHTML = response.name;
        temp.innerHTML = "Temperature: " + response.main.temp;
        humidity.innerHTML = "Temperature: " + response.main.humidity;
        humidity.innerHTML = "Humidity: " + response.main.humidity + "%";
        wind.innerHTML = "Wind Speed: " + response.wind.speed + " MPH";

        cityName.setAttribute("class", "cityName");
        weatherIcon.setAttribute("src", weatherIconHTML);
        weatherIcon.setAttribute("class", "weatherIcon");

        currentWeatherBox.appendChild(cityName);
        currentWeatherBox.appendChild(weatherIcon);
        currentWeatherBox.appendChild(temp);
        currentWeatherBox.appendChild(humidity);
        currentWeatherBox.appendChild(wind);
        


        console.log(response.name);
        console.log(response.main.temp);
        console.log(response.main.humidity);
        console.log(response.wind.speed);
    });
}

searchIcon.addEventListener("click", renderWeather);





