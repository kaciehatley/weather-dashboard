var searchHistory = document.querySelector(".searchHistory");
var searchIcon = document.querySelector(".search-icon");
var inputBox = document.querySelector(".searchInput");
var userHistory = [];

function createButtons() {
    searchHistory.innerHTML = "";
    var inputValue = inputBox.value;
    userHistory.push(inputValue);
    
    for (var i=0; i < userHistory.length; i++) {
        var historyBlock = document.createElement("div");
        historyBlock.setAttribute("class", "historyBlock");
        historyBlock.innerHTML = userHistory[i];
        searchHistory.prepend(historyBlock);
    }
}

searchIcon.addEventListener("click", createButtons);




