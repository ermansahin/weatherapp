let button = document.querySelector(".button");
let inputValue = document.querySelector(".search-box");
let temp = document.querySelector(".current .temp");
let description = document.querySelector(".current .weather");
let city = document.querySelector(".location .city");
let date = document.querySelector(".location .date");

button.addEventListener("click", function () {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&units=metric&appid=03a094de2fbed757402784c8ab602833`
  )
    .then((response) => response.json())
    .then(displayData)
    
});

const displayData = (weather) => {
  temp.innerHTML = `${Math.round(weather.main.temp)}°C`;
  description.innerText = `${weather.weather[0].description}`;
  city.innerText = `${weather.name}, ${weather.sys.country}`;
};