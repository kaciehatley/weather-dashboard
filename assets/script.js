var searchHistory = document.querySelector(".searchHistory");
var searchIcon = document.querySelector(".search-icon");
var inputBox = document.querySelector(".searchInput");
var currentWeatherBox = document.querySelector(".currentWeather");

var userHistory = [];


function renderWeather() {
    var today = new Date();
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var monthNum = today.getMonth();
    var currentMonth = months[monthNum];
    var date = ("(" + currentMonth+' '+today.getDate()+', '+today.getFullYear() + ")");

    searchHistory.innerHTML = "";
    var cityValue = inputBox.value;
    userHistory.push(cityValue);
    currentWeatherBox.innerHTML="";

    var weatherURL = "https://api.openweathermap.org/data/2.5/weather?q="+ inputBox.value + "&appid=8f851cd1ee25a4bb8996f7bb698edf09";

    $.ajax({
        url: weatherURL,
        method: "GET"
    }).then(function(response) {
        var lat = response.coord.lat;
        var lon = response.coord.lon;
        console.log(lat, lon);

        for (var i=0; i < userHistory.length; i++) {
            var historyBlock = document.createElement("div");
            historyBlock.setAttribute("class", "historyBlock");
            historyBlock.innerHTML = userHistory[i];
            searchHistory.prepend(historyBlock);
        }

        arr1 = ["One", "Two", "Three", "Four", "Five"];
        var fiveDayDiv = document.querySelector(".fiveDay");
        fiveDayDiv.innerHTML="";

        for (var j=0; j < 5; j++) {
            var fiveDayBlock = document.createElement("div");
            fiveDayBlock.setAttribute("class", "fiveDayBlock");
            fiveDayBlock.innerHTML = arr1[j];
            fiveDayDiv.appendChild(fiveDayBlock);
        }

        var cityName = document.createElement("h1");
        var currentDate = document.createElement("h2");
        var weatherIcon = document.createElement("img");
        var weatherIconHTML = "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png";
        var temp = document.createElement("p");
        var humidity = document.createElement("p");
        var wind = document.createElement("p");
        var uvIndex = document.createElement("p");



        cityName.innerHTML = response.name;
        currentDate.innerHTML = date;
        temp.innerHTML = "Temperature: " + ((response.main.temp - 273.15) * (9 / 5) + 32).toFixed(0) + "&#8457";
        humidity.innerHTML = "Temperature: " + response.main.humidity;
        humidity.innerHTML = "Humidity: " + response.main.humidity + "%";
        wind.innerHTML = "Wind Speed: " + response.wind.speed + " MPH";

        cityName.setAttribute("class", "cityName");
        weatherIcon.setAttribute("src", weatherIconHTML);
        weatherIcon.setAttribute("class", "weatherIcon");
        currentDate.setAttribute("class", "date");
        uvIndex.setAttribute("class", "uvIndex");

        currentWeatherBox.appendChild(cityName);
        currentWeatherBox.appendChild(currentDate);
        currentWeatherBox.appendChild(weatherIcon);
        currentWeatherBox.appendChild(temp);
        currentWeatherBox.appendChild(humidity);
        currentWeatherBox.appendChild(wind);

        var uvURL = "http://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + lon + "&appid=8f851cd1ee25a4bb8996f7bb698edf09";
        console.log(uvURL);

        $.ajax({
            url: uvURL,
            method: "GET"
        }).then(function(response) {
            uvIndex.innerHTML = "UV Index: " + response.value;
            currentWeatherBox.appendChild(uvIndex);
            // var fiveDayURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + cityValue + "&mode=json&appid=8f851cd1ee25a4bb8996f7bb698edf09"
            // var date = [];
            // var temp = [];
            // var icon = [];
            // var humidity = [];
            // var date = [];


            // $.ajax({
            //     url: fiveDayURL,
            //     method: "GET"
            // }).then(function(response) {
            //     for (var k=0; k < 5; k++) {
            //     var forecastDate = (response.list[k].dt_txt.substring(0, 10));
            //     console.log(forecastDate);
            //     }
            // })
        }
        )
    }
    )};

searchIcon.addEventListener("click", renderWeather);




