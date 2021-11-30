var city = document.getElementById("cityName");
var state = document.getElementById("cityState");
var icon = document.getElementById("icon");
var tempC = document.getElementById("tempC");
var feel = document.getElementById("feel");
var humidityIndex = document.getElementById("humidity");
var uvIndex = document.getElementById("uv");

var IPlocation = document.getElementById("location");
var cityInput = document.getElementById("city-input");
var find = document.getElementById("find");

//update data on screen
function showData(data) {
  let { name, country } = data.location;
  let { feelslike_c, humidity, temp_c, uv, condition } = data.current;

  city.innerText = name;
  state.innerText = country;
  icon.src = `https:${condition.icon}`;
  tempC.innerText = `${temp_c}º`;

  feel.innerText = `${feelslike_c}º`;
  humidityIndex.innerText = `${humidity}%`;
  uvIndex.innerText = uv;
}

// Find button click
find.addEventListener("click", () => {
  getData(cityInput.value);
  cityInput.value = "";
});

// Enter is pressed on city input
cityInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    find.click();
  }
});

// When location icon is clicked - find IP location data
IPlocation.addEventListener("click", () => {
  getIPData();
});

// When page is loaded - show IP location data
getIPData();
