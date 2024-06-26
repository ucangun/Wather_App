const submitButton = document.querySelector(".btn");
const input = document.querySelector("input");
const cities = document.querySelector(".cities");

let globalCityData = null;

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  let inputValue = input.value;
  getCityWeather(inputValue);
  input.value = "";
});

const getCityWeather = async (city) => {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=75b251ce9d3d5c7bf9e4f1832b237076&units=metric`
    );

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    globalCityData = data;
    getCityCard(data);
    console.log(data);
  } catch (error) {
    console.error("Fetch error:", error);
  }
};

const getCityCard = (data) => {
  const listItem = document.createElement("li");
  listItem.innerHTML += `
  <li class="city">
    <h2 class="city-name">${data.name} <sup>${data.sys.country}</sup></h2>
    <div class="city-temp">${data.main.temp}<sup>°C</sup></div>
    <figure>
      <img class="city-icon" src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"
      
      alt="Weather icon">
      <figcaption>${data.weather[0].description}</figcaption>
    </figure>
  </li>`;

  cities.appendChild(listItem);
};
