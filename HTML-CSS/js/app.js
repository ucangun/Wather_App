const cities = document.querySelector(".cities");

const getCityWeather = async () => {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Istanbul&appid=75b251ce9d3d5c7bf9e4f1832b237076&units=metric`
    );

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    getCityCard(data);
    console.log(data);
  } catch (error) {
    console.error("Fetch error:", error);
  }
};

getCityWeather();

const getCityCard = (data) => {
  const listItem = document.createElement("li");
  listItem.innerHTML += `
  <li class="city">
    <h2 class="city-name">${data.name} <sup>UK</sup></h2>
    <div class="city-temp">${data.main.temp}<sup>°C</sup></div>
    <figure>
      <img class="city-icon" src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"
      
      alt="Weather icon">
      <figcaption>${data.weather[0].description}</figcaption>
    </figure>
  </li>`;

  cities.appendChild(listItem);
};
