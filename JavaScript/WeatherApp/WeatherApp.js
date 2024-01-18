import {apiKey} from './openweathermap_apikey.js';

// weather app logic
// initialization
const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const errorDisplay = document.createElement("p");

weatherForm.addEventListener("submit", async event =>{
    event.preventDefault();
    displayError("clear");

    const city = cityInput.value;
    
    if(city){
        try{
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);
        } catch(error){
            console.log(error);
            displayError(error);
        }
    } else {
        displayError("Please enter a city");
    }
})

// call for the weather data from the openweathermap api
async function getWeatherData(city){
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const response = await fetch(apiURL);
    if (!response.ok){
        throw new Error("Could not fetch data for the given city");
    }
    return await response.json();
}

// create the weather card components and display the weather info on them
function displayWeatherInfo(data){
    generateCard();
    const cityDisplay = document.querySelector(".cityDisplay");
    const tempDisplay = document.querySelector(".tempDisplay");
    const humidityDisplay = document.querySelector(".humidityDisplay");
    const descDisplay = document.querySelector(".descDisplay");
    const emojiDisplay = document.querySelector(".weatherEmoji");
    
    const {
        name: city,
        main:{temp, humidity},
        weather:[{description, id}]
    } = data;

    card.style.display = "block";
    cityDisplay.textContent = city;
    tempDisplay.textContent = `${((temp - 273.15) * (9/5) + 32).toFixed(1)}°F`;
    humidityDisplay.textContent = `Humidity: ${humidity}%`;
    descDisplay.textContent = description;
    emojiDisplay.textContent = getWeatherEmoji(id);
}

// returns the appropriate emoji according to the current weather id, and also sets the background to the associated CSS background
function getWeatherEmoji(weatherId){
    const emojiContainer = document.querySelector(".card-col-emoji");
    emojiContainer.className = "card-col-emoji"; // clear any bg classes that might have been applied already
    switch(true){
        case (weatherId >= 200 && weatherId < 300):
            emojiContainer.classList.add("backgroundThunder");
            return "⛈️";
        case (weatherId >= 300 && weatherId < 400):
            emojiContainer.classList.add("backgroundRainy");
            return "🌧️";
        case (weatherId >= 500 && weatherId < 600):
            emojiContainer.classList.add("backgroundRainy");
            return "🌧️";
        case (weatherId >= 600 && weatherId < 700):
            emojiContainer.classList.add("backgroundCloudy");
            return "❄️";
        case (weatherId >= 700 && weatherId < 800):
            emojiContainer.classList.add("backgroundCloudy");
            return "🌫️";
        case (weatherId === 800):
            emojiContainer.classList.add("backgroundSunny");
            return "☀️";
        case (weatherId >= 801 && weatherId < 810):
            emojiContainer.classList.add("backgroundCloudy");
            return "☁️";
        default:
            return "❔";
    }
}

function displayError(message){
    // remove error box on command
    if(message === "clear"){
        errorDisplay.style.display = "none";
        return;
    }
    errorDisplay.style.display = "block";
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");
    weatherForm.append(errorDisplay);
}

function generateCard(){ // generates card html template if it doesn't already exist
    if(card.innerHTML == ""){
        card.innerHTML = `<div class="card-flex">
                            <div class="card-col-info">
                                <h1 class="cityDisplay"></h1>
                                <p class="tempDisplay"></p>
                                <p class="humidityDisplay"></p>
                                <p class="descDisplay"></p>
                            </div>
                            <div class="card-col-emoji">
                                <p class="weatherEmoji"></p>
                            </div>
                        </div>`;
    }
}