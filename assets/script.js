var searchHistory = document.querySelector(".searchHistory");
var searchIcon = document.querySelector(".search-icon");
var inputBox = document.querySelector(".searchInput");
var currentWeatherBox = document.querySelector(".currentWeather");
currentWeatherBox.innerHTML = "Hello"
var userHistory = [];

function renderWeather() {
    searchHistory.innerHTML = "";
    var cityValue = inputBox.value;
    userHistory.push(cityValue);
    
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
        console.log(response.name);
        console.log(response.main.temp);
        console.log(response.main.humidity);
        console.log(response.wind.speed);
    });
}

searchIcon.addEventListener("click", renderWeather);





