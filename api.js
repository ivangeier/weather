// Generate your API Key from
// https://www.weatherapi.com
const key = "YOUR_API_KEY_HERE";

//Request date from city input
function getData(inputCity) {
  let url = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${inputCity}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      showData(data);
    });
}

//Request data from IP location
function getIPData() {
  let url = `https://api.weatherapi.com/v1/current.json?key=${key}&q=auto:ip&lang=pt`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      showData(data);
    });
}
