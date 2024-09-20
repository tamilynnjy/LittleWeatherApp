function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let currentDay = days[date.getDay()];

  let hours = date.getHours();
  let minutes = date.getMinutes();
  minutes = minutes < 10 ? "0" + minutes : minutes;

  let currentDateTime = document.querySelector(".current-details");
  currentDateTime.innerHTML = `${currentDay} ${hours}:${minutes}, moderate rain<br />
      Humidity: <strong>87%</strong>, Wind: <strong>7.2km/h</strong>`;
}

let now = new Date();
formatDate(now);

function displayCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector(".search-input");

  if (searchInput.value) {
    getWeather(searchInput.value);
  } else {
    alert("Please type in a city");
  }
}

function displayTemperature(response) {
  let temperature = Math.round(response.data.temperature.current);
  let city = response.data.city;

  let headingElement = document.querySelector("h1");
  headingElement.innerHTML = `${city}`;
  let currentTemperature = document.querySelector(".current-temperature-value");
  currentTemperature.innerHTML = `${temperature}`;
}

function getWeather(city) {
  let apiKey = "991bbo481ffb54ef6edf4e5a0t3f0207";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
}

let form = document.querySelector("form");
form.addEventListener("submit", displayCity);
